import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Data} from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getTasks(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiServerUrl}/task/all`);
  }

  public getTasksByState(state: number): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiServerUrl}/task/${state}`);
  }

  public addNote(data: Data): Observable<Data> {
    return this.http.post<Data>(`${this.apiServerUrl}/task/add`, data);
  }
  public updateStatus(data: Data): Observable<Data> {
    return this.http.put<Data>(`${this.apiServerUrl}/task/update`, data);
  }
}


