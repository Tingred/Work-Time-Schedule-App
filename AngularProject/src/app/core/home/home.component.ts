import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/employee';
import { AppState } from 'src/app/interfaces/store';
import * as fromAuthSelectors from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  isLogged$: Observable<boolean> = this.store$.pipe(select(fromAuthSelectors.selecIsLoggedIn));
  user$: Observable<User | null> = this.store$.pipe(select(fromAuthSelectors.selectUser));

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

}
