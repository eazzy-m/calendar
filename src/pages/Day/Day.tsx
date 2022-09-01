import React from 'react';
import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {selectDay} from "../../redux/slices/monthSlice";
import "./Day.scss";
import {selectedDay} from "../../app/store";

function Day(props: {day: dayjs.Dayjs, key: number, rowIndex: number}) {

    const day = props.day;
    const firstRow = props.rowIndex;
    const dispatch = useDispatch();
    const currentDay = (): boolean => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    };
    const clickDay = useSelector(selectedDay);

    const dayChecker = () => {
        // please don't beat me
         return day.format("DD-MM-YY") === `${clickDay[0]}${clickDay[1]}-${clickDay[3]}${clickDay[4]}-${clickDay[6]}${clickDay[7]}`
    };

    return (
        <div className={"day-container"} onClick={() => dispatch(selectDay(day.format("DD-MM-YY")))}>
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