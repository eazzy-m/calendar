import React from 'react';
import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {selectDay} from "../../redux/slices/monthSlice";
import "./Day.scss";
import {selectedDay} from "../../app/store";



function Day(props: {day: dayjs.Dayjs, key: number, rowIndex: number}) {

    const clickedDay = useSelector(selectedDay)
    const day = props.day;
    const firstRow = props.rowIndex;
    const dispatch = useDispatch();
    const currentDay = (): boolean => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    };

    const dayChecker = () => {
         return day.format("dddd, MMM DD") === clickedDay;
    };

    return (
        <div className={"day-container"} onClick={() => dispatch(selectDay(day.format("dddd, MMM DD")))}>
            {firstRow === 0 &&
                <p className="day-description">
                    {day.format('ddd').toUpperCase()}
                </p>
            }
            <p className={`day-number ${currentDay() && "today"} ${dayChecker() && "day-container_active"}`}>
                {day.format('DD')}
            </p>

        </div>
    );
}

export default Day;