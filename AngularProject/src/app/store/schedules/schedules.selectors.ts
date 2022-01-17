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
  export const selectEmployeeSchedules = createSelector(
    selectState,
    fromReducer.getEmployeeSchedules
  )

  export const selectSchedule = createSelector(
    selectState,
    fromReducer.getSchedule
  )

  export const selectScheduleByDate = (date: string | null) => createSelector(
    selectSchedules,
    (schedules) => {
      if (date) {
        return schedules.find(s => s.date === date)
      }
      return null;
    }
  );