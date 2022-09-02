import React from 'react';
import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {selectDay} from "../../redux/slices/monthSlice";
import "./Day.scss";
import {selectedDay} from "../../app/store";
import {IEvents} from "../../interfaces/IEvents";
import {deleteEvent} from "../../redux/slices/eventsSlice";
import {openModal} from "../../redux/slices/modalSlice";


function Day(props: {day: dayjs.Dayjs, key: number, rowIndex: number, events: IEvents[]}) {

    const clickedDay = useSelector(selectedDay)
    const events = props.events;
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
            <div className="events-container">
                {events.map((event) =>
                    <div className="events-list" key={event.id}>
                    {event.selectedDay === day.format("dddd, MMM DD")
                        ?
                        <div style={{backgroundColor: event.status}} className="event">
                            <button onClick={() =>dispatch(openModal(event.id))} className="event-button event-button_edit">&#10002;</button>
                            <span className="event-text">{event.text}</span>
                            <button onClick={() => dispatch(deleteEvent(event))} className="event-button event-button_delete">&#10004;</button>
                        </div>
                        : ""}
                </div>)}
            </div>
        </div>
    );
}

export default Day;