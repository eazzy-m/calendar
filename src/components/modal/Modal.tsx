import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {closeModal} from "../../redux/slices/modalSlice";
import "./Modal.scss"
import {isModalOpen} from "../../app/store";

function Modal() {
    const dispatch = useDispatch();
    const isOpen = useSelector(isModalOpen)

    const closeModalByClick = (e: any) => {
        if (e.target.classList.contains('modal')) {
            dispatch(closeModal());
        }
    };

    return (
        <div className={`${isOpen ? "modal" : "modal_inactive"}`}
             onClick={(e) => closeModalByClick(e)}>
            <form className="form">
                <input className="input"/>
                <input className="input"/>
                <button className="submit-button" type={"submit"}>Add</button>
            </form>
        </div>
    );
}

export default Modal;