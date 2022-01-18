import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/interfaces/store';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';
import * as fromSelectorsAuth from '../../store/auth/auth.selectors';
import * as fromActionsAuth from '../../store/auth/auth.actions';
import { Roles } from 'src/app/interfaces/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  isLoggedIn$: Observable<boolean> = this.store$.pipe(select(fromSelectorsAuth.selecIsLoggedIn));
  roles$: Observable<Array<Roles>> = this.store$.pipe(select(fromSelectorsAuth.selectUserRoles));

  constructor(
    private store$: Store<AppState>,
    private router: Router
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store$.pipe(
      select(fromSelectorsAuth.selectUserRoles),
      map((userRoles: Array<Roles>) => {
        const routeRoles: Array<Roles> = route.data.roles;
        if (routeRoles && !routeRoles.some(role => userRoles.includes(role))) {
          this.router.navigate(['home']);
          return false;
        }
        return true;
      }));
  }
}
