import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workplace } from '../interfaces/workplace';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WorkplaceService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAll(): Observable<Workplace[]> {
    return this.http.get(`${this.baseUrl}/api/workplace/all`, { observe: 'response' }).pipe(map( response=> response.body as Workplace[]));
  }

  getPositions(): Observable<string[]> {
    return this.http.get(`${this.baseUrl}/api/workplace/positions`, { observe: 'response' }).pipe(map(response=> response.body as string[]));
  }

  deleteWorkplace(uuid: string) {
    return this.http.delete(`${this.baseUrl}/api/workplace/delete/${uuid}`);
  }

  updateWorkplace(workplace:Workplace, uuid:string) {
    return this.http.put(`${this.baseUrl}/api/workplace/delete/${uuid}`, workplace, httpOptions).subscribe();
  }

  addNew(workplace:Workplace): Observable<Workplace> {
    return this.http.post(`${this.baseUrl}/api/workplace/new`, workplace,  { observe: 'response' }).pipe(map( response=> response.body as Workplace));
  }
}
