import { Component,OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { Products, product } from '../products';
declare let $:any
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:product[]=[]
  constructor(private _ProductService:ProductService){

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
