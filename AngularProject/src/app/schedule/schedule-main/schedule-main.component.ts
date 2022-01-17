import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Shift } from 'src/app/interfaces/shift';
import { AppState } from 'src/app/interfaces/store';
import * as fromSelectors from '../../store/options/options.selectors';
import * as fromActions from '../../store/options/options.actions';
import { Moment } from 'moment';
@Component({
  selector: 'app-schedule-main',
  templateUrl: './schedule-main.component.html',
  styleUrls: ['./schedule-main.component.scss']
})
export class ScheduleMainComponent implements OnInit {
  selected!: Moment | null;
  date!: string;
  shifts$: Observable<Shift[]> = this.store$.pipe(select(fromSelectors.selectShifts));

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(fromActions.getAllShifts());
    console.log(this.store$.pipe(select(fromSelectors.selectShifts)));
  }
  get parsedDate() {
    if  (this.selected != null)
    return this.selected.format('YYYY-MM-DD');
    else return null;
   }
}
