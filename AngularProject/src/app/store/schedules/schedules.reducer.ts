import { Action, createFeatureSelector, createReducer, on, State } from '@ngrx/store';
import { Schedule } from 'src/app/interfaces/schedule';
import { AppState } from 'src/app/interfaces/store';
import * as fromActions from './schedules.actions';

export interface SchedulesState {
    schedules: Array<Schedule>;
    schedule: Schedule;
}

export const initialState: SchedulesState = {
    schedules: [],
    schedule: {} as Schedule
};

const _schedulesReducer = createReducer(
    initialState,
    on(fromActions.getAllSchedulesSuccess, (state, {schedules}) => ({
        ...state,
        schedules
    })),
    on(fromActions.getScheduleSuccess, (state, {schedule}) => ({
        ...state,
        schedule
    })),
    on(fromActions.deleteScheduleSuccess, (state, {date,shiftUuid}) => ({
        ...state,
        schedules: [...state.schedules.filter(s => s.shiftUuid !== shiftUuid)]
    })),
    on(fromActions.addScheduleSuccess, (state, {schedule}) => ({
        ...state,
        schedules: [
            ...state.schedules,
            schedule
        ]
    })),
    on(fromActions.updateScheduleSuccess, (state, {schedule}) => ({
        ...state,
        schedules: [
            ...state.schedules,
            schedule
        ]
    })),

);

export function schedulesReducer(state: SchedulesState | undefined, action: Action){
    return _schedulesReducer(state,action);
}

export const selectState = (state: AppState) => state.schedules;
export const getSchedules = (state: SchedulesState) =>state.schedules;
export const getSchedule = (state: SchedulesState) =>state.schedule;

