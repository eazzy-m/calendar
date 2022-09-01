import React from 'react';

import "./CalendarHeader.scss"
import calendar from "../../assets/calendar/calendar-svgrepo-com.svg"
import navigation from "../../assets/navigation/above-arrow-navigation-svgrepo-com.svg"
import {useDispatch} from "react-redux";
import {nextMonth, previousMonth} from "../../redux/slices/monthSlice";

function CalendarHeader() {
    const dispatch = useDispatch()

    return (
        <header className="header">
            <img src={calendar} alt={"icon"} className="logo"/>
            <h1 className="header__title">Calendar</h1>
            <button className="header__button header__button_today" type={"button"}>Today</button>
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
        </header>
    );
}

export default CalendarHeader;
