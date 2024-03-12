import { Injectable } from '@angular/core';
import { environnement } from '../environnement/environnement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = `${environnement.apiUrl}`;

  constructor(private http: HttpClient) { }
  index(): Observable<any>{
    return this.http.get<any[]>(this.url);
  }

  login(user: any): Observable<any>{
    return this.http.post<any[]>(`${environnement.apiUrl}/login`, user);
  }

  register(user: any): Observable<any>{
    return this.http.post<any[]>(`${environnement.apiUrl}/register`, user);
  }

   create(contact: any): Observable<any>
   {
    return this.http.post(`${this.url}`, contact);

   }

  //  update()


}
