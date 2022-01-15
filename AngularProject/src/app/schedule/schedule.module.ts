import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleMainComponent } from './schedule-main/schedule-main.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { OptionsModule } from '../options/options.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SingleScheduleComponent } from './single-schedule/single-schedule.component';



@NgModule({
  declarations: [
    ScheduleMainComponent,
    SingleScheduleComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    OptionsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ScheduleMainComponent
  ]
})
export class ScheduleModule { }
