import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environnement } from '../environnement/environnement';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService { 
  constructor(private http: HttpClient) {} // Injection du service HttpClient dans le constructeur

  create(contact: any): Observable<any>{
    return this.http.post<any>(`${environnement.apiUrl}/tasks`, contact);
  }
}
