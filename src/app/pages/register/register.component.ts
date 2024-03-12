import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder,
    private authService: AuthentificationService){}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });
  }
  emailExistsError = false;
  onSubmitForm(){
    this.authService.register(this.registerForm.value).subscribe(
      async(res) =>{
        this.initForm();
        this.router.navigateByUrl('');
      },
      (error) => {
        // Traitement en cas d'erreur
        console.error('Erreur lors de l\'inscription:', error);
  
        // Affichez le message d'erreur à l'utilisateur, par exemple
        if (error.status === 409) {
          // Le code 409 indique un conflit (e-mail existe déjà)
          this.emailExistsError = true;
        }
      }
    )
  }
    
  aller_a_login(){
    this.router.navigateByUrl('');
  }
 
}
