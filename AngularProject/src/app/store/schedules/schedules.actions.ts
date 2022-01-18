import { createAction, props } from '@ngrx/store';
import { Schedule, ScheduleRequest, ScheduleResponse } from "src/app/interfaces/schedule";

export const getAllSchedules = createAction(
    '[SCHEDULES] Get all schedules'
);

export const getAllSchedulesSuccess = createAction(
    '[SCHEDULES] Get all schedules success',
    props<{ schedules: Array<ScheduleResponse> }>()
);

export const getAllSchedulesFailure = createAction(
    '[SCHEDULES] Get all schedules failure',
    props<{ message: string }>()
);
export const getAllEmployeeSchedules = createAction(
    '[SCHEDULES] Get all employee schedules',
    props<{ employeeUuid: string }>()
);

export const getAllEmployeeSchedulesSuccess = createAction(
    '[SCHEDULES] Get all employee schedules success',
    props<{  employeeSchedules: Array<ScheduleResponse> }>()
);

export const getAllEmployeeSchedulesFailure = createAction(
    '[SCHEDULES] Get all employee schedules failure',
    props<{ message: string }>()
);

export const getSchedule = createAction(
    '[SCHEDULES] Get schedule',
    props<{ date: string, shiftUuid:string }>()
);

export const getScheduleSuccess = createAction(
    '[SCHEDULES] Get schedule success',
    props<{ schedule: ScheduleResponse }>()
);

export const getScheduleFailure = createAction(
    '[SCHEDULES] Get schedule failure',
    props<{ message: string }>()
);

export const clearSchedule = createAction(
    '[SCHEDULES] Clear schedule'
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
    props<{ schedule: ScheduleRequest}>()
);

export const addScheduleSuccess = createAction(
    '[SCHEDULES] add schedule success',
    props<{ schedule: ScheduleResponse }>()
);

export const addScheduleFailure = createAction(
    '[SCHEDULES] add schedule failure',
    props<{ message: string }>()
);

export const updateSchedule = createAction(
    '[SCHEDULES] update schedule',
    props<{ schedule: ScheduleRequest, uuid:string}>()
);

export const updateScheduleSuccess = createAction(
    '[SCHEDULES] update schedule success',
    props<{ schedule: ScheduleResponse}>()
);

export const updateScheduleFailure = createAction(
    '[SCHEDULES] update schedule failure',
    props<{ message: string }>()
);