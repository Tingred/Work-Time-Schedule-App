import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceMainComponent } from './workplace/workplace-main/workplace-main.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkplaceNewComponent } from './workplace/workplace-new/workplace-new.component';
import { ValueArrayPipe } from '../pipes/value-array.pipe';
import { EmployeeTasksComponent } from './employee/employee-tasks/employee-tasks.component';
import { RouterModule } from '@angular/router';
import { EmployeeTaskNewComponent } from './employee/employee-task-new/employee-task-new.component';
import { MyDatePickerModule } from 'mydatepicker';




@NgModule({
  declarations: [
    WorkplaceMainComponent,
    EmployeeMainComponent,
    WorkplaceNewComponent,
    EmployeeTasksComponent,
    EmployeeTaskNewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MyDatePickerModule
  ],
  exports: [
    WorkplaceMainComponent,
    EmployeeMainComponent,
    WorkplaceNewComponent,
    EmployeeTaskNewComponent,
    EmployeeTasksComponent
  ]
})
export class FirmModule { }
