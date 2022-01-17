import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './interfaces/store';
import * as fromAuthActions from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';

  constructor(
    private store$: Store<AppState>
  ) {
    this.store$.dispatch(fromAuthActions.initAuth());
  }
}
