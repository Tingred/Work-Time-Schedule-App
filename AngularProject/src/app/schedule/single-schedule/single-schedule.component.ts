import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store,select } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store'
import * as fromSelectorsSchedule from '../../store/schedules/schedules.selectors';
import * as fromActionsSchedule from '../../store/schedules/schedules.actions'
import * as fromSelectorsFirm from '../../store/firm/firm.selectors';
import * as fromActionsFirm from '../../store/firm/firm.actions'
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/interfaces/schedule';
import { ThemePalette } from '@angular/material/core';
import { Workplace } from 'src/app/interfaces/workplace';
import { Employee } from 'src/app/interfaces/employee';


@Component({
  selector: 'app-single-schedule',
  templateUrl: './single-schedule.component.html',
  styleUrls: ['./single-schedule.component.css']
})
export class SingleScheduleComponent implements OnInit {

  shiftUuid!: string;
  date!: string;
  color: ThemePalette = "primary";

  schedule$: Observable<Schedule> = this.store$.pipe(select(fromSelectorsSchedule.selectSchedule));
  workplaces$: Observable<Workplace[]> = this.store$.pipe(select(fromSelectorsFirm.selectWorkplaces));
  employees$: Observable<Employee[]> =  this.store$.pipe(select(fromSelectorsFirm.selectEmployees));

  form = this.fb.group({
    workplaces: this.fb.array([
      
    ])   
  });


  constructor(
    private router:ActivatedRoute,
    private store$: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.shiftUuid = res.shiftUuid;
      this.date = res.date})
      this.store$.dispatch(fromActionsSchedule.getSchedule({date: this.date as string,shiftUuid: this.shiftUuid as string}));
      this.store$.dispatch(fromActionsFirm.getAllWorkplaces());
      this.store$.dispatch(fromActionsFirm.getAllEmployees());

  }
  print(){
    console.log(this.shiftUuid);
    console.log(this.date)
  }
  addSchedule() {
    const scheduleFromForm = this.form.value;
    this.store$.dispatch(fromActionsSchedule.addSchedule({schedule: scheduleFromForm}));
  }
  updateSchedule() {
    const scheduleFromForm = this.form.value;    
    this.store$.dispatch(fromActionsSchedule.updateSchedule({schedule: scheduleFromForm,uuid: this.shiftUuid as string}));
  }

  deleteSchedule(){
    this.store$.dispatch(fromActionsSchedule.deleteSchedule({date: this.date as string,shiftUuid: this.shiftUuid as string}));
  }
}
