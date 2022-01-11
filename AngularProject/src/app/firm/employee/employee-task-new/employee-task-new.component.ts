import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { WorkplaceService } from 'src/app/services/workplace.service';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store'
import * as fromActions from '../../../store/firm/firm.actions'
import { EmployeeService } from 'src/app/services/employee.service';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-employee-task-new',
  templateUrl: './employee-task-new.component.html',
  styleUrls: ['./employee-task-new.component.css']
})
export class EmployeeTaskNewComponent implements OnInit {
  form = this.fb.group({
    myDate: new FormControl(''),
    text: new FormControl('')
  });
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
};
  
  

  constructor(
    private employeeService: EmployeeService,
    private store$: Store<AppState>,
    private fb: FormBuilder) { }

  
  @Input() uuid!:string;

  ngOnInit() {
  
  }

  addTask(uuid: string) {
    const taskFromForm = this.form.value;
    this.store$.dispatch(fromActions.addTask({task: taskFromForm,uuid}))
  };
   setDate(): void {
        // Set today date using the patchValue function
        let date = new Date();
        this.form.patchValue({myDate: {
        date: {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()}
        }});
    }

    clearDate(): void {
        // Clear the date using the patchValue function
        this.form.patchValue({myDate: null});
    }
}