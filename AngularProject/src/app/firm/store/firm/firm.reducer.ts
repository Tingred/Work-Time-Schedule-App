import { Action, createFeatureSelector, createReducer, on, State } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store';
import { Workplace } from 'src/app/interfaces/workplace';
import * as fromActions from './firm.actions';

export interface FirmState {
    workplaces: Array<Workplace>;
}

export const initialState: FirmState = {
    workplaces: [],
};


const _firmReducer = createReducer(
    initialState,
    on(fromActions.getAllWorkplacesSuccess, (state, {workplaces}) => ({
        ...state,
        workplaces
    })),
    on(fromActions.deleteWorkplaceSuccess, (state, {uuid}) => ({
        ...state,
        workplaces: [...state.workplaces.filter(w => w.uuid !== uuid)]
    })),
);

export function firmReducer(state: FirmState | undefined, action: Action) {
    return _firmReducer(state, action);
}

export const selectState = (state: AppState) => state.firm;
export const getWorkplaces = (state: FirmState) => state.workplaces;