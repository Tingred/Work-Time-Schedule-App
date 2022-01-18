import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Shift } from '../interfaces/shift';
import { environment } from 'src/environments/environment';

const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllShifts(): Observable<Shift[]> {
    return this.http.get(`${this.baseUrl}/api/shifts`, { observe: 'response' }).pipe(map( response=> response.body as Shift[]));
  }

  getShift(uuid:string): Observable<Shift> {
    return this.http.get(`${this.baseUrl}/api/shift/${uuid}`, { observe: 'response' }).pipe(map( response=> response.body as Shift));
  }

  deleteShift(uuid: string) {
    return this.http.delete(`${this.baseUrl}/api/shift/delete/${uuid}`);
  }

  updateShift(shift:Shift, uuid:string) {
    return this.http.put(`${this.baseUrl}/api/shift/update/${uuid}`, shift, { observe: 'response' }).pipe(map( response=> response.body as Shift));
  }

  addShift(shift:Shift): Observable<Shift> {
    return this.http.post(`${this.baseUrl}/api/shift/new`, shift,  { observe: 'response' }).pipe(map( response=> response.body as Shift));
  }
}
