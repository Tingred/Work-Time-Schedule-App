import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { ScheduleService } from 'src/app/services/schedule.service';
import * as fromActions from './schedules.actions';


@Injectable()
export class SchedulesEffects {

    public getAllSchedules$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.getAllSchedules),
            switchMap(() => this.scheduleService.getAllSchedules().pipe(
                map((body) => fromActions.getAllSchedulesSuccess({ schedules: body })),
                catchError((message) => of(fromActions.getAllSchedulesFailure({ message })))
            ))
        ), { dispatch: true }
    );
    public getSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getSchedule),
      switchMap(({ date,shiftUuid }) => this.scheduleService.getSchedule(date,shiftUuid).pipe(
        map((body) => fromActions.getScheduleSuccess({ schedule: body })),
        catchError((message) => of(fromActions.getScheduleFailure({ message })))
      ))
    ), { dispatch: true }
  );

    public addSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addSchedule),
      switchMap(({ schedule }) => this.scheduleService.addSchedule(schedule).pipe(
        map((newSchedule) => fromActions.addScheduleSuccess({ schedule: newSchedule })),
        catchError((message) => of(fromActions.addScheduleFailure({ message })))
      ))
    ), { dispatch: true }
  );
  public deleteSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteSchedule),
      switchMap(({ date,shiftUuid }) => this.scheduleService.deleteSchedule(date,shiftUuid).pipe(
        map(() => fromActions.deleteScheduleSuccess({ date,shiftUuid })),
        catchError((message) => of(fromActions.deleteScheduleFailure({ message })))
      ))
    ), { dispatch: true }
  );
  public updateSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateSchedule),
      switchMap(({ schedule }) => this.scheduleService.updateSchedule(schedule).pipe(
        map((updateSchedule) => fromActions.updateScheduleSuccess({ schedule: updateSchedule })),
        catchError((message) => of(fromActions.updateScheduleFailure({ message })))
      ))
    ), { dispatch: true }
  );
  public backToSchedules$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateScheduleSuccess,
        fromActions.addScheduleSuccess,
        fromActions.deleteScheduleSuccess),
      tap(() => this.router.navigate(['harmonogram']))
    ), { dispatch: false }
  );

    constructor(
        private actions$: Actions,
        private scheduleService: ScheduleService,
        private router: Router
    ) { }
}