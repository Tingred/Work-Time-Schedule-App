import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Shift } from '../interfaces/shift';

const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(private http:HttpClient) { }

  getAllShifts(): Observable<Shift[]> {
    return this.http.get(`http://localhost:8080/api/shifts`, { observe: 'response' }).pipe(map( response=> response.body as Shift[]));
  }

  deleteShift(uuid: string) {
    return this.http.delete(`http://localhost:8080/api/shift/delete/${uuid}`);
  }

  updateShift(shift:Shift, uuid:string) {
    return this.http.put(`http://localhost:8080/api/shift/delete/${uuid}`, shift, { observe: 'response' }).pipe(map( response=> response.body as Shift));
  }

  addShift(shift:Shift): Observable<Shift> {
    return this.http.post(`http://localhost:8080/api/shift/new`, shift,  { observe: 'response' }).pipe(map( response=> response.body as Shift));
  }
}
