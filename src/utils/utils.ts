import dayjs from "dayjs";
import {MonthType} from "../types/types";


export function getMonth(month:number = dayjs().month()): MonthType {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfMonth;

    return new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
}