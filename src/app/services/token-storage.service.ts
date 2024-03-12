import { Injectable } from '@angular/core';
import { environnement } from '../environnement/environnement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN="token";


@Injectable({
  providedIn: 'root'
})
export class tokenStorageService {
  url = `${environnement.apiUrl}`;

  constructor() { }
  
  

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.setItem(TOKEN, token);
  }


  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN);
  }
  
  public removeToken(): void {
    window.sessionStorage.clear();
  }

  

 


}
