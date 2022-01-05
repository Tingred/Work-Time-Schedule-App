import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallMainComponent } from './hall/hall-main/hall-main.component';
import { WorkplaceMainComponent } from './workplace/workplace-main/workplace-main.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { HallNewComponent } from './hall/hall-new/hall-new.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HallMainComponent,
    HallNewComponent,
    
    WorkplaceMainComponent,
    EmployeeMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HallMainComponent,
    WorkplaceMainComponent,
    EmployeeMainComponent,
    HallNewComponent,
    
  ]
})
export class FirmModule { }
