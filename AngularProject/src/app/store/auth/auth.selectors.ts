import { createSelector, on } from '@ngrx/store';
import { Roles } from 'src/app/interfaces/employee';

import * as fromReducer from './auth.reducer';
 
export const selectState = createSelector(
  fromReducer.selectState,
  (state) => state
);

export const selectIsSuccessful = createSelector(
  selectState,
  fromReducer.getIsSuccessful
);

export const selectIsSignUpFailed = createSelector(
  selectState,
  fromReducer.getIsSignUpFailed
);

export const selecIsLoggedIn = createSelector(
  selectState,
  fromReducer.getIsLoggedIn
);

export const selectIsLoginFailed = createSelector(
  selectState,
  fromReducer.getIsLoginFailed
);

export const selectUser = createSelector(
  selectState,
  fromReducer.getUser
);

export const selectUserRoles = createSelector(
  selectUser,
  (user) => {
    if (user) {
      return user.roles
    }
    return [Roles.NOT_LOGGED];
  }
);

export const selectUserId = createSelector(
  selectUser,
  (user) => {
    if (user) {
      return user.id
    }
    return -1;
  }
);