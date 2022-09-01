import {createSlice} from "@reduxjs/toolkit";
import dayjs from "dayjs";


const initialState = {
    month: dayjs().month(),
    selectedDay: {
        0: "",
        1: "",
        2: "-",
        3: "",
        4: "",
        5: "-",
        6: "",
        7: ""}
};

export const monthSlice = createSlice({
    name: "month",
    initialState,
    reducers: {
        nextMonth: (state) => {
            state.month += 1;
        },
        previousMonth: (state) => {
            state.month -= 1;
        },
        today: (state) => {
            state.month = dayjs().month();
        },
        selectDay: (state, action) => {
            state.selectedDay = {...action.payload}
            console.log(state.selectedDay)
        }
    }
});

export const {nextMonth, previousMonth, today, selectDay} = monthSlice.actions;


