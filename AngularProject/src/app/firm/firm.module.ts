import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallMainComponent } from './hall-main/hall-main.component';
import { WorkplaceMainComponent } from './workplace-main/workplace-main.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';



@NgModule({
  declarations: [
    HallMainComponent,
    WorkplaceMainComponent,
    EmployeeMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HallMainComponent,
    WorkplaceMainComponent,
    EmployeeMainComponent
  ]
})
export class FirmModule { }
