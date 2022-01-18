import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftsComponent } from './shifts/shifts.component';
import { ShiftNewComponent } from './shift-new/shift-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShiftUpdateComponent } from './shift-update/shift-update.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    ShiftsComponent,
    ShiftNewComponent,
    ShiftUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    ShiftsComponent,
    ShiftNewComponent
    
  ]
})
export class OptionsModule { }
