import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/interfaces/employee';
import { ETask } from 'src/app/interfaces/etask';
import { Workplace } from 'src/app/interfaces/workplace';

/*  Workplace  */

export const initAuth = createAction(
    '[AUTH] Init auth',
);

export const registerUser = createAction(
    '[AUTH] Register user',
    props<{username: string, email: string, password: string}>()
);

export const registerUserSuccess = createAction(
    '[AUTH] Register user success',
    props<{user: any}>()
);

export const registerUserFailure = createAction(
    '[AUTH] Register user failure',
    props<{message: any}>()
);

export const loginUser = createAction(
    '[AUTH] Login user',
    props<{username: string, password: string}>()
);


export const loginUserSuccess = createAction(
    '[AUTH] Login user success',
    props<{user: any}>()
);


export const loginUserFailure = createAction(
    '[AUTH] Login user failure',
    props<{message: any}>()
);