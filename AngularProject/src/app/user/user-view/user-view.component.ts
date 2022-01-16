import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Shift } from 'src/app/interfaces/shift';
import { AppState } from 'src/app/interfaces/store';
import * as fromSelectorsOptions from '../../store/options/options.selectors';
import * as fromActionsOptions from '../../store/options/options.actions';
import * as fromSelectorsSchedule from '../../store/schedules/schedules.selectors';
import * as fromActionsSchedule from '../../store/schedules/schedules.actions';
import { Moment } from 'moment';
import { Schedule } from 'src/app/interfaces/schedule';
import { map } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  currentUser: any;

  selected!: Moment | null;
  employeeUuid!: string;
  schedules$: Observable<Schedule[]> = this.store$.pipe(select(fromSelectorsSchedule.selectEmployeeSchedules));
  selectedSchedule$: Observable<Schedule> = this.schedules$.pipe(map(schedule=> schedule.date == this.parsedDate));
  constructor(
    private store$: Store<AppState>,
    private token: TokenStorageService

  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.store$.dispatch(fromActionsSchedule.getAllEmployeeSchedules({employeeUuid: this.employeeUuid as string }))
  }

  get parsedDate() {
    if  (this.selected != null)
    return this.selected.format('YYYY-MM-DD');
    else return null;
   }
}
