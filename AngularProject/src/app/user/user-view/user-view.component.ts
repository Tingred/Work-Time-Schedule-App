import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { Shift } from 'src/app/interfaces/shift';
import { AppState } from 'src/app/interfaces/store';
import * as fromSelectorsOptions from '../../store/options/options.selectors';
import * as fromActionsOptions from '../../store/options/options.actions';
import * as fromSelectorsSchedule from '../../store/schedules/schedules.selectors';
import * as fromActionsSchedule from '../../store/schedules/schedules.actions';
import * as fromSelectorsFirm from '../../store/firm/firm.selectors';
import * as fromActionsFirm from '../../store/firm/firm.actions';
import { Moment } from 'moment';
import { Schedule } from 'src/app/interfaces/schedule';
import { map } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';
import { Employee } from 'src/app/interfaces/employee';
import { ETask } from 'src/app/interfaces/etask';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  currentUser: any;

  selected!: Moment | null;
  tasks$: Observable<ETask[]> = this.store$.pipe(select(fromSelectorsFirm.selectTasks));
  schedule$: Observable<Schedule | null | undefined> = this.store$.pipe(select(fromSelectorsSchedule.selectScheduleByDate(this.parsedDate)));
  constructor(
    private store$: Store<AppState>,
    private token: TokenStorageService

  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.store$.dispatch(fromActionsFirm.getEmployee(this.token.getUser().id));
  }

  get parsedDate() {
    if  (this.selected != null)
    return this.selected.format('YYYY-MM-DD');
    else return null;
   }

   delete(uuid: string | undefined) {
    this.store$.dispatch(fromActionsFirm.deleteTask({ uuid: uuid as string }));
  }
}
