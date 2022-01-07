import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workplace } from '../interfaces/workplace';

const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WorkplaceService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/workplace/all`, { observe: 'response' });
  }

  getPositions(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/workplace/positions`, { observe: 'response' });
  }

  deleteWorkplace(uuid: string) {
    return this.http.delete(`http://localhost:8080/api/workplace/delete/${uuid}`)
  }

  updateWorkplace(workplace:Workplace, uuid:string) {
    return this.http.put(`http://localhost:8080/api/workplace/delete/${uuid}`, workplace, httpOptions);
  }

  addNew(workplace:Workplace) {
    return this.http.post(`http://localhost:8080/api/workplace/new`, workplace, httpOptions);
  }
}
