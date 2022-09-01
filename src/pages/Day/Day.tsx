import React from 'react';
import dayjs from "dayjs";

import "./Day.scss"

function Day(props: {day: dayjs.Dayjs, key: number, rowIndex: number}) {

    const day = props.day
    const firstRow = props.rowIndex;

    const currentDay = (): boolean => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    };

    return (
        <div className="day-container">

            {firstRow === 0 &&
                <p className="day-description">
                    {day.format('ddd').toUpperCase()}
                </p>
            }

            <p className={`day-number ${currentDay() && 'today'}`}>
                {day.format('DD')}
            </p>

        </div>
    );
}

export default Day;