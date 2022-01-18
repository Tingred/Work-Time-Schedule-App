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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

 export const DateFormats = {
            parse: {
                dateInput: ['YYYY-MM-DD']
            },
            display: {
                dateInput: 'YYYY-MM-DD',
                monthYearLabel: 'MMM YYYY',
                dateA11yLabel: 'LL',
                monthYearA11yLabel: 'MMMM YYYY',
            },
        };



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
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    WorkplaceMainComponent,
    EmployeeMainComponent,
    WorkplaceNewComponent,
    EmployeeTaskNewComponent,
    EmployeeTasksComponent
  ], providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      { provide: MAT_DATE_FORMATS, useValue: DateFormats },
      {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}}


  ],
})

export class FirmModule { }
