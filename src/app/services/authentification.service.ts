import { Injectable } from '@angular/core';
import { environnement } from '../environnement/environnement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
   
  constructor(private http: HttpClient) { }

  login(user:any): Observable<any>{
    // Créez un objet HttpHeaders avec le token que vous souhaitez ajouter
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '
      // Remplacez 'YOUR_ACCESS_TOKEN' par le token réel que vous souhaitez ajouter
    });

    // Utilisez les options d'en-tête pour ajouter le header à la requête
    const options = {
      headers: headers
    };
    return this.http.post<any>(`${environnement.apiUrl}/auth/login`, user);
  }

  register(user: any): Observable<any>{
    return this.http.post<any>(`${environnement.apiUrl}/auth/register`, user);
  }
 
// Pour la partie gestion des tokens

storeToken(tokenValue: string){
  localStorage.setItem('token',tokenValue);
 
  console.log('Token mis à jour avec succès:', tokenValue);
}

getToken(): string | null {
  return localStorage.getItem('token');
}

isloggedIn(): boolean{
  return !!localStorage.getItem('data.token')
}
  






}
