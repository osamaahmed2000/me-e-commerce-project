import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import{AuthService}from '../auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){ }
  loading:boolean=false;
  registerForm:FormGroup=new FormGroup({
    name : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,15}$/)]),
    rePassword : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,15}$/)]),
    phone : new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })
  
  submitRegister(formData:FormGroup){
    this.loading=true;
    this._AuthService.register(formData.value).subscribe({
      next:(data)=>{
if (data.message=='success') {
  this._Router.navigate(['/login'])

  this.loading=false;

}        
      },
      error:(err)=>{
        alert(err?.error?.errors?.msg || err?.error?.message )
        this.loading=false;

        
      },
      complete:()=>{},
    })
  }


}
