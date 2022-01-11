import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/services/employee.service';
import { WorkplaceService } from 'src/app/services/workplace.service';
import * as fromActions from './firm.actions';


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
      switchMap(() => this.employeeService.getAll().pipe(
        map((body) => fromActions.getAllEmployeesSuccess({employees: body})),
        catchError((message) => of(fromActions.getAllEmployeesFailure({message})))
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
    private workplaceService: WorkplaceService,
    private employeeService: EmployeeService
  ) {}
}