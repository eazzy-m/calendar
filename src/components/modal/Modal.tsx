import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {closeModal} from "../../redux/slices/modalSlice";
import "./Modal.scss"
import {isModalOpen, selectedDay} from "../../app/store";
import dayjs from "dayjs";

function Modal() {

    const dispatch = useDispatch();
    const isOpen = useSelector(isModalOpen);
    const clickedDay = useSelector(selectedDay);


    const closeModalByClick = (e: any) => {
        if (e.target.classList.contains('modal')) {
            dispatch(closeModal());
        }
    };

    return (
        <div className={`${isOpen ? "modal" : "modal_inactive"}`}
             onClick={(e) => closeModalByClick(e)}>
            <form className="form">
                <input className="input" required/>
                <button className="submit-button" type={"submit"}>Add</button>
            </form>
            <div className="date">
                <span>
                    {clickedDay ? clickedDay : dayjs().format("dddd, MMM DD")}
                </span>
            </div>
        </div>
    );
}

export default Modal;