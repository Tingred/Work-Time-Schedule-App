import { createAction, props } from '@ngrx/store';
import { Schedule } from "src/app/interfaces/schedule";

export const getAllSchedules = createAction(
    '[SCHEDULES] Get all schedules'
);

export const getAllSchedulesSuccess = createAction(
    '[SCHEDULES] Get all schedules success',
    props<{ schedules: Array<Schedule> }>()
);

export const getAllSchedulesFailure = createAction(
    '[SCHEDULES] Get all schedules failure',
    props<{ message: string }>()
);

export const getSchedule = createAction(
    '[SCHEDULES] Get schedule',
    props<{ date: string, shiftUuid:string }>()
);

export const getScheduleSuccess = createAction(
    '[SCHEDULES] Get schedule success',
    props<{ schedule: Schedule }>()
);

export const getScheduleFailure = createAction(
    '[SCHEDULES] Get schedule failure',
    props<{ message: string }>()
);

export const deleteSchedule = createAction(
    '[SCHEDULES] Delete schedule',
    props<{ date: string, shiftUuid:string }>()
);

export const deleteScheduleSuccess = createAction(
    '[SCHEDULES] Delete schedule success',
    props<{ date: string, shiftUuid:string }>()
);

export const deleteScheduleFailure = createAction(
    '[SCHEDULES] Delete schedule failure',
    props<{ message: string }>()
);

export const addSchedule = createAction(
    '[SCHEDULES] add schedule',
    props<{ schedule: Schedule}>()
);

export const addScheduleSuccess = createAction(
    '[SCHEDULES] add schedule success',
    props<{ schedule: Schedule }>()
);

export const addScheduleFailure = createAction(
    '[SCHEDULES] add schedule failure',
    props<{ message: string }>()
);

export const updateSchedule = createAction(
    '[SCHEDULES] update schedule',
    props<{ schedule: Schedule, uuid:string}>()
);

export const updateScheduleSuccess = createAction(
    '[SCHEDULES] update schedule success',
    props<{ schedule: Schedule}>()
);

export const updateScheduleFailure = createAction(
    '[SCHEDULES] update schedule failure',
    props<{ message: string }>()
);