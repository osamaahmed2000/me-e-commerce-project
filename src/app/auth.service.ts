import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
 import { Observable,BehaviorSubject } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string= 'https://ecommerce.routemisr.com'
  userData:BehaviorSubject<any>=new BehaviorSubject(null);
saveUserData(data:any){
this.userData.next(data)
}
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('token')){
   let token:any = localStorage.getItem('token')
   if(token!=null){

     let data =jwtDecode(token)
     this.saveUserData(data)
   }
    }
  }
  register(data:any):Observable<any>{
return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`,data)
  }
  login(data:any):Observable<any>{
   return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`,data)
  }

 logout(){
  localStorage.removeItem('token')
  this.saveUserData(null)
  this._Router.navigate(['/login'])
 }
}
