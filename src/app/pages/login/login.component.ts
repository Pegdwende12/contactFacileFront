import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

import { NgIf, isPlatformBrowser, } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userConnect!: FormGroup; // Assurez-vous que c'est correctement orthographié


  constructor(@Inject(PLATFORM_ID)private platformId:object, private router: Router, private authService: AuthentificationService,  private formBuilder: FormBuilder) {
   
  }

  ngOnInit(): void {
    this.initForm();
    
  }
   initForm(){
    this.userConnect = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  
   onSubmitForm(){
    if(this.userConnect.valid){
      console.log(this.userConnect.value);
      this.authService.login(this.userConnect.value).subscribe({
        next:(res)=>{
          alert(res.message);
          console.log(res)
          if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('token',res.token),
            console.log('token', res.token)

          }
          this.router.navigateByUrl('contact');
          
        },
        error: (err)=>{
          alert(err.error.message)
        }
      })
       
      
    }else{
      console.log("Une erreur est survenu");

    }
 
  }


  aller_a_register() {
    this.router.navigateByUrl('register');
  }

  
}
