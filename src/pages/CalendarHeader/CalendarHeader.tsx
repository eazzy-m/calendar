import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import dayjs from "dayjs";

import calendar from "../../assets/calendar/calendar-svgrepo-com.svg";
import navigation from "../../assets/navigation/above-arrow-navigation-svgrepo-com.svg";
import {nextMonth, previousMonth, today} from "../../redux/slices/monthSlice";
import {month} from "../../app/store";
import "./CalendarHeader.scss";

function CalendarHeader() {
    const dispatch = useDispatch();
    const monthState = useSelector(month);

    return (
        <header className="header">
            <img src={calendar} alt={"icon"} className="logo"/>
            <h1 className="header__title">Calendar</h1>
            <button className="header__button header__button_today"
                    onClick={() => dispatch(today())}
                    type={"button"}>
                Today
            </button>
            <button className="header__button header__button_navigation"
                    onClick={() => dispatch(previousMonth())}
                    type={"button"}>
                <img className="left-button" src={navigation} alt={'left'}/>
            </button>
            <button className="header__button header__button_navigation"
                    onClick={() => dispatch(nextMonth())}
                    type={"button"}>
                <img className="right-button" src={navigation} alt={'right'}/>
            </button>
            <h2 className="header__subtitle">
                {dayjs(new Date(dayjs().year(), monthState)).format("MMMM YYYY")}
            </h2>
        </header>
    );
}

export default CalendarHeader;
