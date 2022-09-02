import {createSlice} from "@reduxjs/toolkit";
import {IEvents} from "../../interfaces/IEvents";


const initialState: IEvents[] = [
    {
        selectedDay: null,
        text: "",
        status: "",
        id: Date.now()
    }
];

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        createNewEvent: (state, {payload}) => {
            console.log("Created from create", [...state, payload])
            return [...state, payload];
        },
        updateEvent: (state, {payload}) => {
           return state.map((values) => values.id === payload.id ? payload : values);

           },
        deleteEvent: (state, {payload}) => {
            return state.filter((event) => event.id !== payload.id);
        },
    }
});


export const {
    createNewEvent,
    updateEvent,
    deleteEvent,
} = eventsSlice.actions;

