import { Component,OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { Products, product } from '../products';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';


declare let $:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:product[]=[]
  constructor(private _ProductService:ProductService,private _CartService:CartService){

}
addCart(id:string){
  this._CartService.addProductCart(id).subscribe({
    next:(response)=>{
      if(response.status=="success"){
        Swal.fire({
          title: "Good job!",
          text: "Product added successfully to your cart",
          icon: "success"
        });
      }
    console.log(response);
    
    }
  })
}

getAllData(page:string='1'){
  this._ProductService.getAllProduct(page).subscribe({
    next:(data:Products)=>{
      console.log(data.data);
      this.productList=data.data
      
    },
    error:()=>{},
    complete:()=>{},
  })
}
ngOnInit(): void {
this.getAllData() 
//   $(".pagenum").click(function(e:any){
// let page =$(e.target).text()   
// console.log(page);
 
//   })
$('.pagenum').click((e:any)=>{
  let page= $(e.target).text()
  this.getAllData(page) 

  
})


}
}
