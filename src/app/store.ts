import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {monthSlice} from "../redux/slices/monthSlice"
import {modalSlice} from "../redux/slices/modalSlice";
import {eventsSlice} from "../redux/slices/eventsSlice";


export const store = configureStore({
  reducer: {
    month: monthSlice.reducer,
    modal: modalSlice.reducer,
    events: eventsSlice.reducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false
  // })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const month = (state: RootState) => state.month.month;
export const selectedDay = (state: RootState) => state.month.selectedDay.date;
export const events = (state: RootState) => state.events;
export const isModalOpen = (state: RootState) => state.modal.isOpen;
export const isEditMode = (state: RootState) => state.modal.editMode;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
