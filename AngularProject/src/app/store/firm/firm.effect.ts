import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, withLatestFrom, filter, first } from 'rxjs/operators';
import { AppState } from 'src/app/interfaces/store';
import { EmployeeService } from 'src/app/services/employee.service';
import { WorkplaceService } from 'src/app/services/workplace.service';
import * as fromActions from './firm.actions';
import * as fromActionsSchedule from '../schedules/schedules.actions';
import * as fromSelectors from './firm.selectors';
import * as fromAuthSelectors from '../auth/auth.selectors';
import { select, Store } from '@ngrx/store';


@Injectable()
export class FirmEffects {

  public getAllWorkplaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getAllWorkplaces),
      switchMap(() => this.workplaceService.getAll().pipe(
        map((body) => fromActions.getAllWorkplacesSuccess({workplaces: body})),
        catchError((message) => of(fromActions.getAllWorkplacesFailure({message})))
      ))
    ), { dispatch: true }
  );

  public deleteWorkplace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteWorkplace),
      switchMap(({uuid}) => this.workplaceService.deleteWorkplace(uuid).pipe(
        map(() => fromActions.deleteWorkplaceSuccess({uuid})),
        catchError((message) => of(fromActions.deleteWorkplaceFailure({message})))
      ))
    ), { dispatch: true }
  );

  public addWorkplace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addWorkplace),
      switchMap(({workplace}) => this.workplaceService.addNew(workplace).pipe(
        map((newWorkplace) => fromActions.addWorkplaceSuccess({workplace: newWorkplace})),
        catchError((message) => of(fromActions.addWorkplaceFailure({message})))
      ))
    ), { dispatch: true }
  );

  public getAllEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getAllEmployees),
      switchMap(() => this.employeeService.getAllEmployees().pipe(
        map((body) => fromActions.getAllEmployeesSuccess({employees: body})),
        catchError((message) => of(fromActions.getAllEmployeesFailure({message})))
      ))
    ), { dispatch: true }
  );
  public getEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getEmployee),
      withLatestFrom(
        this.store$.pipe(select(fromAuthSelectors.selecIsLoggedIn)),
        this.store$.pipe(select(fromAuthSelectors.selectUserId))
      ),
      filter(([{id}, isLoggedIn, userId]) => isLoggedIn),
      switchMap(([{id}, isLoggedIn, userId]) => this.employeeService.getOneByUserId(userId).pipe(
        map((body) => fromActions.getEmployeeSuccess({employee: body})),
        catchError((message) => of(fromActions.getEmployeeFailure({message})))
      ))
    ), { dispatch: true }
  );

  public getEmployeeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getEmployeeSuccess),
      mergeMap(({employee}) => [
        fromActionsSchedule.getAllEmployeeSchedules({employeeUuid: employee.uuid}),
        fromActions.getAllTasks({uuid: employee.uuid})
      ])
    ), { dispatch: true }
  );


  public getAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getAllTasks),
      switchMap(({uuid}) => this.employeeService.getAllTasks(uuid).pipe(
        map((body) => fromActions.getAllTasksSuccess({tasks: body, uuid})),
        catchError((message) => of(fromActions.getAllTasksFailure({message})))
      ))
    ), { dispatch: true }
  );

  public deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteTask),
      switchMap(({uuid}) => this.employeeService.deleteTask(uuid).pipe(
        map(() => fromActions.deleteTaskSuccess({uuid})),
        catchError((message) => of(fromActions.deleteTaskFailure({message})))
      ))
    ), { dispatch: true }
  );

  public addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addTask),
      switchMap(({task,uuid}) => this.employeeService.addTask(task,uuid).pipe(
        map((newTask) => fromActions.addTaskSuccess({task: newTask, uuid})),
        catchError((message) => of(fromActions.addTaskFailure({message})))
      ))
    ), { dispatch: true }
  );

  // public deleteWorkplaceSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromActions.deleteWorkplaceSuccess),
  //     map(() => fromActions.getAllWorkplaces())
  //   ), { dispatch: true }
  // );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private workplaceService: WorkplaceService,
    private employeeService: EmployeeService,
  ) {}
}