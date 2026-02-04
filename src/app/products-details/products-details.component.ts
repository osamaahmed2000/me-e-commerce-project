import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { product } from '../products';
import {ProductsDetails,productInfo}from '../products-details'
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';


declare let $:any

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent  {
  productDetailsList:productInfo | null=null
  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductService:ProductService,private _CartService:CartService){

   

    _ActivatedRoute.params.subscribe((data)=>{
      
      let id =data['id']
      _ProductService.getDetails(id).subscribe({
        next:(data:ProductsDetails)=>{
          console.log(data.data);
          this.productDetailsList =data.data
        }
      })
    })
  }

  ngOnInit() {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      dots:true,
      loop: true,
      margin: 10,
      nav: false,
      autoplay:true,
      autoplayTimeout:1000,
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 1
        }
      }
    });
  }
  addCartDetails(id:string){
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

}
