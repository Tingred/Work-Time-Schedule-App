import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { WorkplaceService } from 'src/app/services/workplace.service';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store'
import * as fromActions from '../../../store/firm/firm.actions'
import { EmployeeService } from 'src/app/services/employee.service';
import {IMyDpOptions} from 'mydatepicker';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-employee-task-new',
  templateUrl: './employee-task-new.component.html',
  styleUrls: ['./employee-task-new.component.scss']
})
export class EmployeeTaskNewComponent implements OnInit {

  form = this.fb.group({
    date: new FormControl('',[Validators.required]),
    text: new FormControl('',[Validators.required])
  });

  constructor(
    private employeeService: EmployeeService,
    private store$: Store<AppState>,
    private fb: FormBuilder) { }

  
  @Input() uuid!:string;

  ngOnInit() {
    console.log(this.uuid)
  }

  addTask(uuid: string) {
    const taskFromForm = {
      ...this.form.value,
      date: this.form.value.date.format('YYYY-MM-DD') 
      }
      console.log(taskFromForm)
    this.store$.dispatch(fromActions.addTask({task: taskFromForm,uuid}))
  };
}