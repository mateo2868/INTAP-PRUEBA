import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  byActivity(id: number): Observable<any>  {
    return this.http.get(`${environment.url}/time/getByActitity?id=${id}`)
  }

  total(userId: any): Observable<any>  {
    return this.http.get(`${environment.url}/time/timeTotal?userId=${userId}`)
  }

  create(params: any): Observable<any> {
    return this.http.post(`${environment.url}/time/create`, params)
  }
}
