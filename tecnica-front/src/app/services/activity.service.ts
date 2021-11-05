import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }
  getAll(userId: any): Observable<any> {
    return this.http.get(`${environment.url}/activity/getAll?userId=${userId}`)
  }

  create(params): Observable<any> {
    return this.http.post(`${environment.url}/activity/create`, params)
  }
}
