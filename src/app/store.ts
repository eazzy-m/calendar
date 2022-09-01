import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {monthSlice} from "../redux/slices/monthSlice"

export const store = configureStore({
  reducer: {
    month: monthSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const month = (state: RootState) => state.month.month;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
