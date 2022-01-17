import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Shift } from 'src/app/interfaces/shift';
import { AppState } from 'src/app/interfaces/store';
import * as fromSelectors from '../../store/options/options.selectors';
import * as fromActions from '../../store/options/options.actions';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {

  shifts$: Observable<Shift[]> = this.store$.pipe(select(fromSelectors.selectShifts));

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(fromActions.getAllShifts());
    console.log(this.store$.pipe(select(fromSelectors.selectShifts)));

    
  }
  delete(uuid: string | undefined){
    this.store$.dispatch(fromActions.deleteShift({uuid: uuid as string}));
  }
}
