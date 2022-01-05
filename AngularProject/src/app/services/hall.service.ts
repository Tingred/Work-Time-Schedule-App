import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hall } from '../interfaces/hall';


const httpOptions =  {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HallService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/api/hall/all', { observe: 'response' })
  }

  addNew(hall: Hall): Observable<any> {
    return this.http.post('http://localhost:8080/api/hall/new', hall, httpOptions);
  }
}
