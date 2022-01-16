import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../interfaces/schedule';
import { map } from 'rxjs/operators';


const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getAllSchedules(): Observable<Schedule[]> {
    return this.http.get(`http://localhost:8080/api/schedule/get-all`, { observe: 'response' }).pipe(map( response=> response.body as Schedule[]));
  }
  getSchedule(date:string, shiftUuid:string): Observable<Schedule> {
    return this.http.get(`http://localhost:8080/api/schedule/get/${date}/${shiftUuid}`, { observe: 'response' }).pipe(map( response=> response.body as Schedule));
  }
  getAllEmployeeSchedules(employeeUuid: string):Observable<Schedule[]> {
    return this.http.get(`http://localhost:8080/api/schedule/get-all/${employeeUuid}`, { observe: 'response' }).pipe(map( response=> response.body as Schedule[]));
  }

  deleteSchedule(shiftUuid: string,date:string) {
    return this.http.delete(`http://localhost:8080/api/schedule/delete/${date}/${shiftUuid}`);
  }

  updateSchedule(schedule: Schedule) {
    return this.http.put(`http://localhost:8080/api/schedule/update`, schedule, { observe: 'response' }).pipe(map( response=> response.body as Schedule));
  }

  addSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post(`http://localhost:8080/api/schedule/new`, schedule,  { observe: 'response' }).pipe(map( response=> response.body as Schedule));
  }
}
