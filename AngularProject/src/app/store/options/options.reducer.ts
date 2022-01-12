import { Action, createFeatureSelector, createReducer, on, State } from '@ngrx/store';
import { Shift } from 'src/app/interfaces/shift';
import { AppState } from 'src/app/interfaces/store';
import * as fromActions from './options.actions';

export interface OptionsState {
    shifts: Array<Shift>;
    shift: Shift;
}

export const initialState: OptionsState = {
    shifts: [],
    shift: {} as Shift
};

const _optionsReducer = createReducer(
    initialState,
    on(fromActions.getAllShiftsSuccess, (state, {shifts}) => ({
        ...state,
        shifts
    })),
    on(fromActions.getShiftSuccess, (state, {shift}) => ({
        ...state,
        shift
    })),
    on(fromActions.deleteShiftSuccess, (state, {uuid}) => ({
        ...state,
        shifts: [...state.shifts.filter(s => s.uuid !== uuid)]
    })),
    on(fromActions.addShiftSuccess, (state, {shift}) => ({
        ...state,
        shifts: [
            ...state.shifts,
            shift
        ]
    })),
    on(fromActions.updateShiftSuccess, (state, {shift}) => ({
        ...state,
        shifts: [
            ...state.shifts,
            shift
        ]
    })),

);

export function optionsReducer(state: OptionsState | undefined, action: Action){
    return _optionsReducer(state,action);
}

export const selectState = (state: AppState) => state.options;
export const getShifts = (state: OptionsState) =>state.shifts;
export const getShift = (state: OptionsState) =>state.shift;