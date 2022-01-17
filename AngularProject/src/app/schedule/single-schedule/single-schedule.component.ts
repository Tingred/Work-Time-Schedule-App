import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store,select } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store'
import * as fromSelectorsSchedule from '../../store/schedules/schedules.selectors';
import * as fromActionsSchedule from '../../store/schedules/schedules.actions'
import * as fromSelectorsFirm from '../../store/firm/firm.selectors';
import * as fromActionsFirm from '../../store/firm/firm.actions';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/interfaces/schedule';
import { ThemePalette } from '@angular/material/core';
import { Workplace } from 'src/app/interfaces/workplace';
import { Employee } from 'src/app/interfaces/employee';
import { first } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-single-schedule',
  templateUrl: './single-schedule.component.html',
  styleUrls: ['./single-schedule.component.scss']
})
export class SingleScheduleComponent implements OnInit {

  shiftUuid!: string;
  date!: string;
  color: ThemePalette = "primary";

  schedule$: Observable<Schedule> = this.store$.pipe(select(fromSelectorsSchedule.selectSchedule));
  workplaces$: Observable<Workplace[]> = this.store$.pipe(select(fromSelectorsFirm.selectWorkplaces));
  employees$: Observable<Employee[]> =  this.store$.pipe(select(fromSelectorsFirm.selectEmployees));
  
  form = this.fb.array([])


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

      this.workplaces$.pipe(
        first(workplaces => !!workplaces),
      ).subscribe(workplaces => {
        workplaces.forEach(w => {
          const group = this.fb.group({
            workplaceUuid: new FormControl(w.uuid),
            employeeUuids: new FormControl([])
          });
          this.form.push(group);
        });
      })

  }

  getWorkplaceEmployees(position: string) {
    return this.store$.pipe(select(fromSelectorsFirm.selectEmployeesByWorkplacePosition(position)));
  }

  toggleEmployee(groupIndex: number, employeeUuid: string, event: MatCheckboxChange) {
    const formGroup = (this.form.at(groupIndex) as FormGroup);
    const employeesControlValue = formGroup.controls.employeeUuids.value;
    if (event.checked) {
      formGroup.controls.employeeUuids.setValue(
        [...formGroup.controls.employeeUuids.value, employeeUuid]
      );
    } else {
      formGroup.controls.employeeUuids.setValue(
        (formGroup.controls.employeeUuids.value as Array<string>).filter(uuid => uuid !== employeeUuid)
        )
    }
    console.log(this.form.value);
  }

  print(){
    console.log(this.shiftUuid);
    console.log(this.date)
  }
  addSchedule() {
    const scheduleFromForm = {
      date: this.date,
      shiftUuid: this.shiftUuid,
      workplaces: this.form.value
    }
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
