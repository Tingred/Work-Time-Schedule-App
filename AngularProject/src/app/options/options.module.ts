import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftsComponent } from './shifts/shifts.component';
import { ShiftNewComponent } from './shift-new/shift-new.component';



@NgModule({
  declarations: [
    ShiftsComponent,
    ShiftNewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShiftsComponent,
    ShiftNewComponent
    
  ]
})
export class OptionsModule { }
