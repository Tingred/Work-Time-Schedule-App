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
import { UserViewComponent } from './schedule/user-view/user-view.component';
import { RoleGuardService } from './services/security/role-guard.service';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { roles: ['ROLE_USER'], animation: 'Home'}
  },
  { 
    path: 'harmonogram', 
    component: ScheduleMainComponent, 
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN'], animation: 'Schedule'}
  },
  {
    path: 'harmonogram/:date/:shiftUuid', 
    component: SingleScheduleComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN']}
  },
  { 
    path: 'zmiany', 
    component: ShiftsComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN'], animation: 'Shifts'}
  },
  {
    path: 'stanowiska', 
    component: WorkplaceMainComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN'], animation: 'Workplace'}
  },
  {
    path: 'pracownicy',
    component: EmployeeMainComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN'], animation: 'Employee'}
  },
  { 
    path: 'zaloguj',
    component: SignInComponent,
    data: { animation: 'SignIn'}

  },
  {
    path: 'zarejestruj',
    component: RegisterComponent,
    data: { animation: 'SignIn'}
  },
  { 
    path: 'zadania',
    component: EmployeeTasksComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN'], animation: 'EmployeeTasks'}
  },
  {
    path: 'zadania/:uuid',
    component: EmployeeTasksComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN'], animation: 'EmployeeTasks'}
  },
  {
    path: 'zmiany/aktualizuj',
    component: ShiftUpdateComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN'], animation: 'ShiftUpdate'}
  },
  {
    path: 'zmiany/aktualizuj/:uuid',
    component: ShiftUpdateComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_ADMIN'], animation: 'ShiftUpdate'}
  },
  {
    path: 'user',
    component: UserViewComponent,
    canActivate: [RoleGuardService] ,
    data: { roles: ['ROLE_USER'], animation: 'UserView'}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
