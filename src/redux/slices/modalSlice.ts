import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    editMode: 0,
    isOpen: false
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, {payload}) => {
            if (payload !== 0) {
                state.editMode = payload;
            }
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.editMode = 0;
        }
    }
});

export const {openModal, closeModal} = modalSlice.actions;
