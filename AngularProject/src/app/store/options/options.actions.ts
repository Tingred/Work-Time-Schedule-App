import { Shift } from "src/app/interfaces/shift";
import { createAction, props } from '@ngrx/store';

export const getAllShifts = createAction(
    '[SHIFT] Get all shifts'
);

export const getAllShiftsSuccess = createAction(
    '[SHIFT] Get all shifts success',
    props<{ shifts: Array<Shift> }>()
);

export const getAllShiftsFailure = createAction(
    '[SHIFT] Get all shifts failure',
    props<{ message: string }>()
);

export const getShift = createAction(
    '[SHIFT] Get shift',
    props<{ uuid: string }>()
);

export const getShiftSuccess = createAction(
    '[SHIFT] Get shift success',
    props<{ shift: Shift }>()
);

export const getShiftFailure = createAction(
    '[SHIFT] Get shift failure',
    props<{ message: string }>()
);

export const deleteShift = createAction(
    '[SHIFT] Delete shift',
    props<{ uuid: string }>()
);

export const deleteShiftSuccess = createAction(
    '[SHIFT] Delete shift success',
    props<{ uuid: string }>()
);

export const deleteShiftFailure = createAction(
    '[SHIFT] Delete shift failure',
    props<{ message: string }>()
);

export const addShift = createAction(
    '[SHIFT] add shift',
    props<{ shift: Shift}>()
);

export const addShiftSuccess = createAction(
    '[SHIFT] add shift success',
    props<{ shift: Shift }>()
);

export const addShiftFailure = createAction(
    '[SHIFT] add shift failure',
    props<{ message: string }>()
);

export const updateShift = createAction(
    '[SHIFT] update shift',
    props<{ shift: Shift, uuid:string}>()
);

export const updateShiftSuccess = createAction(
    '[SHIFT] update shift success',
    props<{ shift: Shift}>()
);

export const updateShiftFailure = createAction(
    '[SHIFT] update shift failure',
    props<{ message: string }>()
);