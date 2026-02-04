import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string= 'https://ecommerce.routemisr.com'

  constructor(private _http:HttpClient) { }
  getAllProduct(page:string):Observable<any>{
    return this._http.get(`${this.baseUrl}/api/v1/products?page=${page}`)
  }
  getDetails(id:string):Observable<any>{
    return this._http.get(`${this.baseUrl}/api/v1/products/${id}`)
  }
  
 
}
