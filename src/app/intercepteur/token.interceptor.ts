import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class tokenInterceptor implements HttpInterceptor{
  constructor(@Inject(PLATFORM_ID)private platformId:object,  private authService: AuthentificationService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string | null = null;
    if(isPlatformBrowser(this.platformId)){
      token = localStorage.getItem('token');
    }
    if(token){
      const modifiedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        },
      });
      return next.handle(modifiedReq);
    }else{
      return next.handle(req)
    }   
    
  }
};
export const TokenInterceptorProvider={
  provide:HTTP_INTERCEPTORS,
  useClass:tokenInterceptor,
  multi:true
}

