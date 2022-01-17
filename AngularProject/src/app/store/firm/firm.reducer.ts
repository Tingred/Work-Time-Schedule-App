import { Action, createFeatureSelector, createReducer, on, State } from '@ngrx/store';
import { Employee } from 'src/app/interfaces/employee';
import { ETask } from 'src/app/interfaces/etask';
import { AppState } from 'src/app/interfaces/store';
import { Workplace } from 'src/app/interfaces/workplace';
import * as fromActions from './firm.actions';

export interface FirmState {
    workplaces: Array<Workplace>;
    employees: Array<Employee>;
    tasks: Array<ETask>;
    employee: Employee;
}

export const initialState: FirmState = {
    workplaces: [],
    employees: [],
    tasks: [],
    employee: {} as Employee
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
    on(fromActions.addWorkplaceSuccess, (state, {workplace}) => ({
        ...state,
        workplaces: [
            ...state.workplaces,
            workplace
        ]
    })),
    on(fromActions.getAllEmployeesSuccess, (state, {employees}) => ({
        ...state,
        employees
    })),
    on(fromActions.getEmployeeSuccess, (state, {employee}) => ({
        ...state,
        employee
    })),
    on(fromActions.getAllTasksSuccess, (state, {tasks}) => ({
        ...state,
        tasks
    })),
    on(fromActions.deleteTaskSuccess, (state, {uuid}) => ({
        ...state,
        tasks: [...state.tasks.filter(t => t.uuid !== uuid)]
    })),
    on(fromActions.addTaskSuccess, (state, {task}) => ({
        ...state,
        tasks: [
            ...state.tasks,
            task
        ]
    })),
);

export function firmReducer(state: FirmState | undefined, action: Action) {
    return _firmReducer(state, action);
}

export const selectState = (state: AppState) => state.firm;
export const getWorkplaces = (state: FirmState) => state.workplaces;
export const getEmployees = (state: FirmState) => state.employees;
export const getTasks = (state: FirmState) => state.tasks;
export const getEmployee = (state: FirmState) => state.employee;