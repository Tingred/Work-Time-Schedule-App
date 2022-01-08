import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ETask } from '../interfaces/etask';
import { map } from 'rxjs/operators';
import { Employee } from '../interfaces/employee';


const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
   }

   getAll(): Observable<Employee[]> {
    return this.http.get(`http://localhost:8080/api/employees`, { observe: 'response' }).pipe(map( response=> response.body as Employee[]));
  }

  getByPosition(position:string): Observable<Employee[]> {
    return this.http.get(`http://localhost:8080/api/employee/by-position`, { observe: 'response' }).pipe(map( response=> response.body as Employee[]));
  }
  getOneByUuid(uuid:string): Observable<Employee> {
    return this.http.get(`http://localhost:8080/api/employee/${uuid}`, { observe: 'response' }).pipe(map( response=> response.body as Employee));
  }

  deleteTask(uuid: string) {
    return this.http.delete(`http://localhost:8080/api/employee/delete-task/${uuid}`).subscribe();
  }

  addTask(task: ETask, uuid:string) {
    return this.http.put(`http://localhost:8080/api/employee/new-task/${uuid}`, task).subscribe();
  }
}
