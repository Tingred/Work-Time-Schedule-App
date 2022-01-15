import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store,select } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store'
import * as fromSelectors from '../../store/schedules/schedules.selectors';
import * as fromActions from '../../store/schedules/schedules.actions'
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/interfaces/schedule';
@Component({
  selector: 'app-single-schedule',
  templateUrl: './single-schedule.component.html',
  styleUrls: ['./single-schedule.component.css']
})
export class SingleScheduleComponent implements OnInit {

  shiftUuid!: string;
  date!: string;

  schedule$: Observable<Schedule> = this.store$.pipe(select(fromSelectors.selectSchedule));

  form = this.fb.group({
    startTime: new FormControl(''),
    finishTime: new FormControl('')
  });


  constructor(
    private router:ActivatedRoute,
    private store$: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.shiftUuid = res.shiftUuid;
      this.date = res.date})
      this.store$.dispatch(fromActions.getSchedule({date: this.date as string,shiftUuid: this.shiftUuid as string}));

  }
  print(){
    console.log(this.shiftUuid);
    console.log(this.date)
  }
  addSchedule() {
    const scheduleFromForm = this.form.value;
    this.store$.dispatch(fromActions.addSchedule({schedule: scheduleFromForm}));
  }
  updateSchedule() {
    const scheduleFromForm = this.form.value;    
    this.store$.dispatch(fromActions.updateSchedule({schedule: scheduleFromForm,uuid: this.shiftUuid as string}));
  }

  deleteSchedule(){
    this.store$.dispatch(fromActions.deleteSchedule({date: this.date as string,shiftUuid: this.shiftUuid as string}));
  }
}
