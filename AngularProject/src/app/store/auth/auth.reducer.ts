import { Action, createFeatureSelector, createReducer, on, State } from '@ngrx/store';
import { Employee } from 'src/app/interfaces/employee';
import { ETask } from 'src/app/interfaces/etask';
import { AppState } from 'src/app/interfaces/store';
import { Workplace } from 'src/app/interfaces/workplace';
import { User } from 'src/app/interfaces/employee';
import * as fromActions from './auth.actions';

export interface AuthState {
    isSuccessful: boolean;
    isSignUpFailed: boolean;
    isLoginFailed: boolean;
    isLoggedIn: boolean;
    signupErrorMessage: string;
    loginErrorMessage: string;
    user: User | null;
}

export const initialState: AuthState = {
    isSuccessful: false,
    isSignUpFailed: false,
    isLoginFailed: false,
    isLoggedIn: false,
    signupErrorMessage: '',
    loginErrorMessage: '',
    user: null
};


const _authReducer = createReducer(
    initialState,
    on(fromActions.registerUserSuccess, (state, {user}) => ({
        ...state,
        user,
        isSuccessful: true,
        isSignUpFailed: false
    })),
    on(fromActions.registerUserFailure, (state, {message}) => ({
        ...state,
        isSuccessful: false,
        isSignUpFailed: true,
        signupErrorMessage: message
    })),
    on(fromActions.loginUserSuccess, (state, {user}) => ({
        ...state,
        user,
        isLoggedIn: true,
        isLoginFailed: false
    })),
    on(fromActions.registerUserFailure, (state, {message}) => ({
        ...state,
        isLoggedIn: true,
        isLoginFailed: false,
        loginErrorMessage: message
    })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}

export const selectState = (state: AppState) => state.auth;
export const getIsSuccessful = (state: AuthState) => state.isSuccessful;
export const getIsSignUpFailed = (state: AuthState) => state.isSignUpFailed;
export const getIsLoggedIn = (state: AuthState) => state.isLoggedIn
export const getIsLoginFailed = (state: AuthState) => state.isLoginFailed;
export const getUser = (state: AuthState) => state.user;