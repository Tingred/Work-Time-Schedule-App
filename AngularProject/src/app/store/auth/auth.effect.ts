import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, withLatestFrom, filter, first } from 'rxjs/operators';
import { AppState } from 'src/app/interfaces/store';
import { EmployeeService } from 'src/app/services/employee.service';
import { WorkplaceService } from 'src/app/services/workplace.service';
import * as fromActions from './auth.actions';
import { AuthService } from 'src/app/services/security/auth.service';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';

@Injectable()
export class AuthEffects {

  public initAuth$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActions.initAuth),
    filter(() => !!this.tokenStorage.getToken()),
    map(() => fromActions.loginUserSuccess({user: this.tokenStorage.getUser()}))
  ), { dispatch: true }
);

  public registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.registerUser),
      switchMap(({username, email, password}) => this.authService.register({username, email, password}).pipe(
        map((user) => fromActions.registerUserSuccess({user})),
        catchError((message) => of(fromActions.registerUserFailure({message})))
      ))
    ), { dispatch: true }
  );

  public loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loginUser),
      switchMap(({username, password}) => this.authService.login({username, password}).pipe(
        map((user) => fromActions.loginUserSuccess({user})),
        catchError((message) => of(fromActions.loginUserFailure({message})))
      ))
    ), { dispatch: true }
  );

  public loginUserSuccess$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActions.loginUserSuccess),
    tap(({user}) => {
      this.tokenStorage.saveToken(user.accessToken);
      this.tokenStorage.saveUser(user);
      this.router.navigate(['user']);
    })
  ), { dispatch: false }
);

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) {}
}