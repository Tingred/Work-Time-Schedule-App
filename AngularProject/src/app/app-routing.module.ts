import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTasksComponent } from './firm/employee/employee-tasks/employee-tasks.component';
import { EmployeeMainComponent } from './firm/employee/employee-main/employee-main.component';
import { WorkplaceMainComponent } from './firm/workplace/workplace-main/workplace-main.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { ScheduleMainComponent } from './schedule/schedule-main/schedule-main.component';
import { ShiftsComponent } from './options/shifts/shifts.component';

const routes: Routes = [
  { path: 'harmonogram', component: ScheduleMainComponent},
  { path: 'zmiany', component: ShiftsComponent},
  { path: 'stanowiska', component: WorkplaceMainComponent},
  { path: 'pracownicy', component: EmployeeMainComponent},
  { path: 'zaloguj', component: SignInComponent},
  { path: 'zadania', component: EmployeeTasksComponent},
  { path: 'zadania/:uuid', component: EmployeeTasksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
