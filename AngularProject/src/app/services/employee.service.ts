import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ETask } from '../interfaces/etask';
import { map } from 'rxjs/operators';
import { Employee } from '../interfaces/employee';
import { environment } from 'src/environments/environment';

const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
   }

   getAllEmployees(): Observable<Employee[]> {
    return this.http.get(`${this.baseUrl}/api/employees`, { observe: 'response' }).pipe(map( response=> response.body as Employee[]));
  }

  getByPosition(position:string): Observable<Employee[]> {
    return this.http.get(`${this.baseUrl}/api/employee/by-position`, { observe: 'response' }).pipe(map( response=> response.body as Employee[]));
  }
  getOneByUuid(uuid:string): Observable<Employee> {
    return this.http.get(`${this.baseUrl}/api/employee/${uuid}`, { observe: 'response' }).pipe(map( response=> response.body as Employee));
  }
  getOneByUserId(id:number): Observable<Employee> {
    return this.http.get(`${this.baseUrl}/api/employee/by-user-id/${id}`, { observe: 'response' }).pipe(map( response=> response.body as Employee));
  }

  getAllTasks(employeeUuid:string): Observable<ETask[]> {
    return this.http.get(`${this.baseUrl}/api/employee/tasks/${employeeUuid}`, { observe: 'response' }).pipe(map( response=> response.body as ETask[]));
  }

  deleteTask(uuid: string) {
    return this.http.delete(`${this.baseUrl}/api/employee/delete-task/${uuid}`);
  }

  addTask(task: ETask, uuid:string) {
    return this.http.post(`${this.baseUrl}/api/employee/new-task/${uuid}`, task ,{ observe: 'response' }).pipe(map( response=> response.body as ETask));
  }
}
