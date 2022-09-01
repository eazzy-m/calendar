import {createSlice} from "@reduxjs/toolkit";
import dayjs from "dayjs";


const initialState = {
    month: dayjs().month()
};

export const monthSlice = createSlice({
    name: "month",
    initialState,
    reducers: {
        nextMonth: (state) => {
            console.log('next month')
            state.month += 1
        },
        previousMonth: (state) => {
            console.log('previous month')
            state.month -= 1
        }
    }
});

export const {nextMonth, previousMonth} = monthSlice.actions

export default monthSlice.reducer

