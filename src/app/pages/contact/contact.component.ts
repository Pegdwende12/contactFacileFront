import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { PostService } from '../../services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
// le form groupe pour créer un contact
  CreateContact!: FormGroup;
  constructor(private router: Router, private serviceService: PostService,private authService: AuthentificationService, private formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.initForm();
  }
   initForm(){
    this.CreateContact = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.required],
      tel: ['', Validators.required],
      residence: ['', Validators.required],
      categorie: ['', Validators.required],
      
    });
   }
   
   AjouterContact(){
    if(this.CreateContact.valid){
      console.log(this.CreateContact.value);
      this.serviceService.create(this.CreateContact.value).subscribe({
        next:(res)=>{
          alert(res.message)
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

  
  





  
 openCreate(){
  const modalDiv = document.getElementById('createModal');



  
  if(modalDiv!= null){
    modalDiv.style.display ='Block';
  }
}
  closeCreate(){
    const modalDiv = document.getElementById('createModal');
    if(modalDiv!= null){
      modalDiv.style.display ='none';
    }
  }
  createEdit(){
    const modalDiv = document.getElementById('editModal');
    if(modalDiv!= null){
      modalDiv.style.display ='Block';
    }
  }
  closeEdite(){
    const modalDiv = document.getElementById('editModal');
    if(modalDiv!= null){
      modalDiv.style.display ='none';
  }
  }

  createDelete(){
    const modalDiv = document.getElementById('deleteModal');
    if(modalDiv!= null){
      modalDiv.style.display ='Block';
    }
  }
  closeDelete(){
    const modalDiv = document.getElementById('deleteModal');
    if(modalDiv!= null){
      modalDiv.style.display ='none';
    }
  }
  

 Supprimer(): void  {
      if (confirm("Voulez vous vraimentn supprimer"))
      {
        console.log("Etes vous sur de vouloir supprimer?");
      }
      else{
        console.log("Sur?");
      }
 }
  
}





