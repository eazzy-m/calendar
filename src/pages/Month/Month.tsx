import React from 'react';
import {MonthType} from "../../types/types";

import Day from "../Day/Day";
import "./Month.scss"
import {useSelector} from "react-redux";
import {events} from "../../app/store";


function Month(props: { month: MonthType }) {

    const month = props.month;
    const eventsList = useSelector(events)
    return (
        <div className="month-container">
            {month.map((week, index) =>
                    <React.Fragment key={index}>
                        {week.map((day, ind) =>
                            <Day events={eventsList} day={day} key={ind} rowIndex={index}/>
                        )}
                    </React.Fragment>
            )}
        </div>
    );
}

export default Month;