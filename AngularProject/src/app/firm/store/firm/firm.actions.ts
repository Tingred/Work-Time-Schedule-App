import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/interfaces/employee';
import { Workplace } from 'src/app/interfaces/workplace';

export const getAllWorkplaces = createAction(
    '[WORKPLACE] Get all employees',
);

export const getAllWorkplacesSuccess = createAction(
    '[WORKPLACE] Get all employees success',
    props<{workplaces: Array<Workplace>}>()
);

export const getAllWorkplacesFailure = createAction(
    '[WORKPLACE] Get all employees failure',
    props<{message: string}>()
);

export const deleteWorkplace = createAction(
    '[WORKPLACE] Delete all employees',
    props<{uuid: string}>()
);

export const deleteWorkplaceSuccess = createAction(
    '[WORKPLACE] Delete all employees success',
    props<{uuid: string}>()
);

export const deleteWorkplaceFailure = createAction(
    '[WORKPLACE] Delete all employees failure',
    props<{message: string}>()
);