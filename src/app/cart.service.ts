import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string= 'https://ecommerce.routemisr.com'
  headerData:any={
   token: localStorage.getItem('token')
  }


  constructor(private _http:HttpClient) {}

  addProductCart(id:string):Observable<any>{
    let body= {
      productId:id
    }
    return this._http.post(`${this.baseUrl}/api/v1/cart`,body,{
      headers:this.headerData
    })
  }
  getAllProduct():Observable<any>
  {
     return this._http.get(`${this.baseUrl}/api/v1/cart`,{
      headers:this.headerData
     })
  }
  deleteProduct(id:string):Observable<any>
  {
     return this._http.delete(`${this.baseUrl}/api/v1/cart/${id}`,{
      headers:this.headerData
     })
  }
}
