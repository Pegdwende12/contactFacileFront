import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorProvider } from './intercepteur/token.interceptor';


@NgModule({
  declarations: [],
  imports: [
   
    HttpClientModule

    
  ],
  providers: [TokenInterceptorProvider],
  
})
export class AppModule { }
