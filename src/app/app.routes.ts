import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    {
    path : '',
    component : LoginComponent,  
   
    },

    {
        path : 'register',
        component : RegisterComponent
    },
    
    {
        path : 'contact',
        component : ContactComponent
   }

];
