import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workplace } from '../interfaces/workplace';
import { map } from 'rxjs/operators';

const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WorkplaceService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Workplace[]> {
    return this.http.get(`http://localhost:8080/api/workplace/all`, { observe: 'response' }).pipe(map( response=> response.body as Workplace[]));
  }

  getPositions(): Observable<string[]> {
    return this.http.get(`http://localhost:8080/api/workplace/positions`, { observe: 'response' }).pipe(map(response=> response.body as string[]));
  }

  deleteWorkplace(uuid: string) {
    return this.http.delete(`http://localhost:8080/api/workplace/delete/${uuid}`);
  }

  updateWorkplace(workplace:Workplace, uuid:string) {
    return this.http.put(`http://localhost:8080/api/workplace/delete/${uuid}`, workplace, httpOptions).subscribe();
  }

  addNew(workplace:Workplace): Observable<Workplace> {
    console.log('dupa')
    return this.http.post(`http://localhost:8080/api/workplace/new`, workplace,  { observe: 'response' }).pipe(map( response=> response.body as Workplace));
  }
}
