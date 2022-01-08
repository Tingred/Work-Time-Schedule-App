import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/interfaces/employee';
import { Workplace } from 'src/app/interfaces/workplace';

export const getAllWorplaces = createAction(
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