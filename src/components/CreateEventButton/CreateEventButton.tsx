import React from 'react';
import {useDispatch} from "react-redux";
import {openModal} from "../../redux/slices/modalSlice";
import "./CreateEventButton.scss"
import add from "../../assets/add/calendar-add-plus-svgrepo-com.svg";


function CreateEventButton() {
    const dispatch = useDispatch();

    return (
        <button className="button" onClick={() => dispatch(openModal(0))}>
            <img src={add} alt={"add"} className="button__image"/>
            <span className="button__text">Create</span>
        </button>
    );
}

export default CreateEventButton;
