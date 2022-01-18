import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './interfaces/store';
import * as fromAuthActions from './store/auth/auth.actions';
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true}),
        query(':enter', [
          style({ left: '-100%' })
        ], { optional: true}),
        query(':leave', animateChild(), { optional: true}),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ], { optional: true}),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ], { optional: true})
        ]),
        query(':enter', animateChild(), { optional: true}),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'AngularProject';

  constructor(
    private store$: Store<AppState>
  ) {
    this.store$.dispatch(fromAuthActions.initAuth());
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
