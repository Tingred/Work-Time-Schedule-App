import { createSelector, on } from '@ngrx/store';
import * as fromReducer from './schedules.reducer';

export const selectState = createSelector(
    fromReducer.selectState,
    (state) => state
  );
  
  export const selectSchedules = createSelector(
    selectState,
    fromReducer.getSchedules
  )

  export const selectSchedule = createSelector(
    selectState,
    fromReducer.getSchedule
  )
