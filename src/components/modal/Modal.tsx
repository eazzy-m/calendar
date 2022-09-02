import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {closeModal} from "../../redux/slices/modalSlice";
import "./Modal.scss"
import {isEditMode, isModalOpen, selectedDay} from "../../app/store";
import {createNewEvent, updateEvent} from "../../redux/slices/eventsSlice";
import dayjs from "dayjs";

function Modal() {
    const labels = ["gold", "green", "blue", "red", "purple"]
    const dispatch = useDispatch();
    const isOpen = useSelector(isModalOpen);
    const clickedDay = useSelector(selectedDay);
    const editMode = useSelector(isEditMode);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedLabel, setSelectedLabel] = useState<string>(labels[0]);

    const closeModalByClick = (e: any) => {
        if (e.target.classList.contains('modal')) {
            dispatch(closeModal());
            setInputValue('');
        }
    };
    const eventDay = () => {
        if (clickedDay) {
            return clickedDay
        }
        return dayjs().format("dddd, MMM DD")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        setInputValue('');
        const data = {
            status: selectedLabel,
            text: inputValue,
            id: editMode || Date.now(),
            selectedDay: eventDay()
        }
        editMode ? dispatch(updateEvent(data)) : dispatch(createNewEvent(data)) ;
        dispatch(closeModal());
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let text = e.target.value;
        setInputValue(text);
    };

    return (
        <div className={`${isOpen ? "modal" : "modal_inactive"}`}
             onClick={(e) => closeModalByClick(e)}>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <input value={inputValue}
                       onChange={(e) => handleInput(e)}
                       placeholder={"..."}
                       className="input"
                       required/>
                <button className="submit-button" type={"submit"}>Add</button>
            </form>
            <div className="date">
                <span>
                    {eventDay()}
                </span>
            </div>
            <div className="labels-container">
                {labels.map((label, ind) => (
                    <span key={ind}
                          onClick={() => setSelectedLabel(label)}
                          style={{backgroundColor: label}}
                          className={"label"}>
                        {selectedLabel === label &&
                            <span className="checked">&#10004;</span>
                        }
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Modal;