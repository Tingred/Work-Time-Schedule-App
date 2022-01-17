import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/interfaces/employee';
import { AppState } from 'src/app/interfaces/store';
import * as fromAuthSelectors from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-adminHeader',
  templateUrl: './adminHeader.component.html',
  styleUrls: ['./adminHeader.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  roles$: Observable<Array<Roles>> = this.store$.pipe(select(fromAuthSelectors.selectUserRoles));
  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  isAdmin(roles: Array<Roles> | null) {
    if (roles === null) return false;

    return roles.includes(Roles.ROLE_ADMIN);
  }
}
