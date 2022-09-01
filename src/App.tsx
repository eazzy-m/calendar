import React, {useEffect, useState} from 'react';
import {getMonth} from "./utils/utils";
import './App.css';
import CalendarHeader from "./pages/CalendarHeader/CalendarHeader";
import {useSelector, useDispatch} from "react-redux";
import {month} from "./app/store";
import Month from "./pages/Month/Month";
import Sidebar from "./pages/Sidebar/Sidebar";
import {MonthType} from "./types/types";
import Modal from "./components/modal/Modal";
import {closeModal} from "./redux/slices/modalSlice";

function App() {

    const [currentMonth, setCurrentMonth] = useState<MonthType>(getMonth);
    const monthState = useSelector(month);
    const dispatch = useDispatch();
    useEffect(() => {
        setCurrentMonth(getMonth(monthState));
        }, [monthState]);

    const closeModalByEsc = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Escape") {
            dispatch(closeModal())
        }
    };


    return (
      <React.Fragment>
        <div className="App" onKeyDown={(e) => closeModalByEsc(e)}>
          <CalendarHeader/>
          <Sidebar/>
          <Month month={currentMonth}/>
            <Modal/>
        </div>
      </React.Fragment>
  );
}

export default App;
