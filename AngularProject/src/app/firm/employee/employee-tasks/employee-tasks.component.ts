import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, pipe } from 'rxjs';
import { AppState } from 'src/app/interfaces/store';
import { Workplace } from 'src/app/interfaces/workplace';
import * as fromSelectors from '../../../store/firm/firm.selectors';
import * as fromActions from '../../../store/firm/firm.actions';
import { ETask } from 'src/app/interfaces/etask';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.scss']
})
export class EmployeeTasksComponent implements OnInit {

  employeeUuid: any;

  tasks$: Observable<ETask[]> = this.store$.pipe(select(fromSelectors.selectTasks));
  constructor(private router:ActivatedRoute,
    private store$: Store<AppState>) { }

    ngOnInit(){
      this.router.params.subscribe(res => {
      this.store$.dispatch(fromActions.getAllTasks({uuid: res.uuid as string}))
      this.employeeUuid = res.uuid
  });
  }
      

  delete(uuid: string | undefined) {
    this.store$.dispatch(fromActions.deleteTask({ uuid: uuid as string }));
  }
}