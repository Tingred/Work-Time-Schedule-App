import { createSelector, on } from '@ngrx/store';
import * as fromReducer from './firm.reducer';
 
export const selectState = createSelector(
  fromReducer.selectState,
  (state) => state
);

export const selectWorkplaces = createSelector(
  selectState,
  fromReducer.getWorkplaces
)