import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { ShiftService } from 'src/app/services/shift.service';
import * as fromActions from './options.actions';

@Injectable()
export class OptionsEffects {

    public getAllShifts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getAllShifts),
      switchMap(() => this.shiftService.getAllShifts().pipe(
        map((body) => fromActions.getAllShiftsSuccess({shifts: body})),
        catchError((message) => of(fromActions.getAllShiftsFailure({message})))
      ))
    ), { dispatch: true }
  );
  public getShift$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getShift),
      switchMap(({uuid}) => this.shiftService.getShift(uuid).pipe(
        map((body) => fromActions.getShiftSuccess({shift: body})),
        catchError((message) => of(fromActions.getShiftFailure({message})))
      ))
    ), { dispatch: true }
  );

  public addShift$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addShift),
      switchMap(({shift}) => this.shiftService.addShift(shift).pipe(
        map((newShift) => fromActions.addShiftSuccess({shift: newShift})),
        catchError((message) => of(fromActions.addShiftFailure({message})))
      ))
    ), { dispatch: true }
  );

  public deleteShift$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteShift),
      switchMap(({uuid}) => this.shiftService.deleteShift(uuid).pipe(
        map(() => fromActions.deleteShiftSuccess({uuid})),
        catchError((message) => of(fromActions.deleteShiftFailure({message})))
      ))
    ), { dispatch: true }
  );

  public updateShift$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateShift),
      switchMap(({shift,uuid}) => this.shiftService.updateShift(shift,uuid).pipe(
        map((updatedShift) => fromActions.updateShiftSuccess({shift: updatedShift})),
        catchError((message) => of(fromActions.updateShiftFailure({message})))
      ))
    ), { dispatch: true }
  );


  constructor(
    private actions$: Actions,
    private shiftService: ShiftService
  ) {}
}