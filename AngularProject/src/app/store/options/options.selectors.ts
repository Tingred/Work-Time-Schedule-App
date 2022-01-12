import { createSelector, on } from '@ngrx/store';
import * as fromReducer from './options.reducer';

export const selectState = createSelector(
    fromReducer.selectState,
    (state) => state
  );
  
  export const selectShifts = createSelector(
    selectState,
    fromReducer.getShifts
  )
  export const selectShift = createSelector(
    selectState,
    fromReducer.getShift
  )