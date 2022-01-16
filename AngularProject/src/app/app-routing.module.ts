import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTasksComponent } from './firm/employee/employee-tasks/employee-tasks.component';
import { EmployeeMainComponent } from './firm/employee/employee-main/employee-main.component';
import { WorkplaceMainComponent } from './firm/workplace/workplace-main/workplace-main.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { ScheduleMainComponent } from './schedule/schedule-main/schedule-main.component';
import { ShiftsComponent } from './options/shifts/shifts.component';
import { ShiftUpdateComponent } from './options/shift-update/shift-update.component';
import { SingleScheduleComponent } from './schedule/single-schedule/single-schedule.component';

const routes: Routes = [
  { path: 'harmonogram', component: ScheduleMainComponent},
  { path: 'harmonogram/:date/:shiftUuid', component: SingleScheduleComponent},
  { path: 'zmiany', component: ShiftsComponent},
  { path: 'stanowiska', component: WorkplaceMainComponent},
  { path: 'pracownicy', component: EmployeeMainComponent},
  { path: 'zaloguj', component: SignInComponent},
  { path: 'zadania', component: EmployeeTasksComponent},
  { path: 'zadania/:uuid', component: EmployeeTasksComponent},
  { path: 'zmiany/aktualizuj', component: ShiftUpdateComponent},
  { path: 'zmiany/aktualizuj/:uuid', component: ShiftUpdateComponent},
  { path: '', redirectTo: 'zaloguj', pathMatch: 'full' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
