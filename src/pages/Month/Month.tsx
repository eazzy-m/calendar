import React from 'react';
import {MonthType} from "../../types/types";

import "./Month.scss"
import Day from "../Day/Day";

function Month(props: { month: MonthType }) {

    const month = props.month;

    return (
        <div className="month-container">
            {month.map((week, index) =>
                    <React.Fragment key={index}>
                        {week.map((day, ind) =>
                            <Day day={day} key={ind} rowIndex={index}/>
                        )}
                    </React.Fragment>
            )}
        </div>
    );
}

export default Month;