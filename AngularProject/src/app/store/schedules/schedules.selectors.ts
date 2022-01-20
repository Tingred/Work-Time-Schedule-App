import { createSelector, on } from '@ngrx/store';
import { WorkplaceNode, Workplace } from 'src/app/interfaces/workplace';
import { Employee } from 'src/app/interfaces/employee';
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
  );

  export const selectScheduleWorplaceNodes = createSelector(
    selectSchedule,
    (schedule) => schedule?.workplaces.map((w: {workplace: Workplace, employees: Array<Employee>}) => ({
      name: w.workplace.name,
      children: w.employees?.map((e: Employee) => ({name: e.name + ' ' + e.surname, children: []}) as WorkplaceNode)
    }) as WorkplaceNode)
  );

  export const selectScheduleCheckboxInitialData = createSelector(
    selectSchedule,
    (schedule) => schedule?.workplaces.map((w: {workplace: Workplace, employees: Array<Employee>}) => ({
      workplaceUuid: w.workplace.uuid,
      employeeUuids: w.employees.map(e => e.uuid)
    }))
  );

  export const selectScheduleExists = createSelector(
    selectSchedule,
    (schedule) => {
      console.log(!!schedule)
      return !!schedule;
    }
  );

  export const selectScheduleByDate = (date: string | null) => createSelector(
    selectEmployeeSchedules,
    (employeeSchedules) => {
      if (date) {
        return employeeSchedules.find(s => s.date === date)
      }
      return null;
    }
  );