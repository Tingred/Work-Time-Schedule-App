import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { WorkplaceService } from 'src/app/services/workplace.service';
import * as fromActions from './firm.actions';

@Injectable()
export class FirmEffects {

  public getAllEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getAllWorkplaces),
      switchMap(() => this.workplaceService.getAll().pipe(
        map((body) => fromActions.getAllWorkplacesSuccess({workplaces: body})),
        catchError((message) => of(fromActions.getAllWorkplacesFailure({message})))
      ))
    ), { dispatch: true }
  );

  public deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteWorkplace),
      switchMap(({uuid}) => this.workplaceService.deleteWorkplace(uuid).pipe(
        map(() => fromActions.deleteWorkplaceSuccess({uuid})),
        catchError((message) => of(fromActions.deleteWorkplaceFailure({message})))
      ))
    ), { dispatch: false }
  );

  public deleteWorkplaceSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteWorkplaceSuccess),
      map(() => fromActions.getAllWorkplaces())
    ), { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private workplaceService: WorkplaceService
  ) {}
}