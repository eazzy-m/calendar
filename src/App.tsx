import React, {useEffect, useState} from 'react';
import {getMonth} from "./utils/utils";
import './App.css';
import CalendarHeader from "./pages/CalendarHeader/CalendarHeader";
import {useSelector} from "react-redux";
import {month} from "./app/store";
import Month from "./pages/Month/Month";
import Sidebar from "./pages/Sidebar/Sidebar";
import {MonthType} from "./types/types";

function App() {
    const [currentMonth, setCurrentMonth] = useState<MonthType>(getMonth);

    const monthState = useSelector(month)
        useEffect(() => {
            setCurrentMonth(getMonth(monthState))
        }, [monthState])


  return (
      <React.Fragment>
        <div className="App">
          <CalendarHeader/>
          <Sidebar/>
          <Month month={currentMonth}/>
        </div>
      </React.Fragment>
  );
}

export default App;
