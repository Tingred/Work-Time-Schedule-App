import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/interfaces/employee';
import { Workplace } from 'src/app/interfaces/workplace';

export const getAllWorkplaces = createAction(
    '[WORKPLACE] Get all workplaces',
);

export const getAllWorkplacesSuccess = createAction(
    '[WORKPLACE] Get all workplaces success',
    props<{workplaces: Array<Workplace>}>()
);

export const getAllWorkplacesFailure = createAction(
    '[WORKPLACE] Get all workplaces failure',
    props<{message: string}>()
);

export const deleteWorkplace = createAction(
    '[WORKPLACE] Delete workplace',
    props<{uuid: string}>()
);

export const deleteWorkplaceSuccess = createAction(
    '[WORKPLACE] Delete workplace success',
    props<{uuid: string}>()
);

export const deleteWorkplaceFailure = createAction(
    '[WORKPLACE] Delete workplace failure',
    props<{message: string}>()
);

export const addWorkplace = createAction(
    '[WORKPLACE] add workplace',
    props<{workplace: Workplace}>()
);

export const addWorkplaceSuccess = createAction(
    '[WORKPLACE] add workplace success',
    props<{workplace: Workplace}>()
);

export const addWorkplaceFailure = createAction(
    '[WORKPLACE] add workplace failure',
    props<{message: string}>()
);

export const getAllEmployees = createAction(
    '[EMPLOYEE] Get all employees',
);

export const getAllEmployeesSuccess = createAction(
    '[EMPLOYEE] Get all employees success',
    props<{employees: Array<Employee>}>()
);

export const getAllEmployeesFailure = createAction(
    '[EMPLOYEE] Get all employees failure',
    props<{message: string}>()
);