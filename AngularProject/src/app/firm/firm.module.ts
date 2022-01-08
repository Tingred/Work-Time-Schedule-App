import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceMainComponent } from './workplace/workplace-main/workplace-main.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkplaceNewComponent } from './workplace-new/workplace-new.component';
import { ValueArrayPipe } from '../pipes/value-array.pipe';




@NgModule({
  declarations: [
    WorkplaceMainComponent,
    EmployeeMainComponent,
    WorkplaceNewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    WorkplaceMainComponent,
    EmployeeMainComponent,
    WorkplaceNewComponent
    
  ]
})
export class FirmModule { }
