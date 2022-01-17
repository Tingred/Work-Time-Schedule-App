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

export const selectEmployees = createSelector(
  selectState,
  fromReducer.getEmployees
);

export const selectEmployee = createSelector(
  selectState,
  fromReducer.getEmployee
);

export const selectEmployeeUuid = createSelector(
  selectEmployee,
  (employee) => employee.uuid
);

export const selectEmployeesByWorkplacePosition = (position: string) => createSelector(
  selectEmployees,
  (employees) => employees.filter(e => e.position === position)
);

export const selectTasks = createSelector(
  selectState,
  fromReducer.getTasks
)