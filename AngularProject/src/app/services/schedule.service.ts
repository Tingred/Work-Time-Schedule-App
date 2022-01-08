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

  getAll(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/schedule/load/all`, { observe: 'response' });
  }

  getByDate(date: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/schedule/load/by-date`,date,{ observe: 'response' } );
  }

  addNew(schedule: Schedule) {
    return this.http.post(`http://localhost:8080/api/schedule/new`, schedule, httpOptions);
  }
}
