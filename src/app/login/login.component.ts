import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import{AuthService}from '../auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){ }
  loading:boolean=false;
 loginForm:FormGroup=new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,15}$/)]),
  })


  
 
  submitLogin(formData:FormGroup){
    console.log(formData);
    
    this.loading=true;
    this._AuthService.login(formData.value).subscribe({
      next:(data)=>{
if (data.message=='success') {
  this._AuthService.saveUserData(data.user)
  localStorage.setItem('token',data.token)
  this._Router.navigate(['/home'])

  this.loading=false;

}        
      },
      error:(err)=>{
        alert(err?.error?.errors?.msg || err?.error?.message )
        console.log(err);
        
        this.loading=false;

        
      },
      complete:()=>{},
    })
  }


}
