import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule, ScheduleRequest, ScheduleResponse } from '../interfaces/schedule';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllSchedules(): Observable<ScheduleResponse[]> {
    return this.http.get(`${this.baseUrl}/api/schedule/get-all`, { observe: 'response' }).pipe(map( response=> response.body as ScheduleResponse[]));
  }
  getSchedule(date:string, shiftUuid:string): Observable<ScheduleResponse> {
    return this.http.get(`${this.baseUrl}/api/schedule/get/${date}/${shiftUuid}`, { observe: 'response' }).pipe(map( response=> response.body as ScheduleResponse));
  }
  getAllEmployeeSchedules(employeeUuid: string):Observable<ScheduleResponse[]> {
    return this.http.get(`${this.baseUrl}/api/schedule/get-all/${employeeUuid}`, { observe: 'response' }).pipe(map( response=> response.body as ScheduleResponse[]));
  }

  deleteSchedule(shiftUuid: string,date:string) {
    return this.http.delete(`${this.baseUrl}/api/schedule/delete/${date}/${shiftUuid}`);
  }

  updateSchedule(schedule: ScheduleRequest): Observable<ScheduleResponse> {
    return this.http.put(`${this.baseUrl}/api/schedule/update`, schedule, { observe: 'response' }).pipe(map( response=> response.body as ScheduleResponse));
  }

  addSchedule(schedule: ScheduleRequest): Observable<ScheduleResponse> {
    return this.http.post(`${this.baseUrl}/api/schedule/new`, schedule,  { observe: 'response' }).pipe(map( response=> response.body as ScheduleResponse));
  }
}
