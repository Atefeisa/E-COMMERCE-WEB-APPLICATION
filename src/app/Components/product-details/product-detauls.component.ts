import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Productdetails, productInfo } from 'src/app/interfaces/productdetail';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/Services/cart.service';
declare let swal : any
@Component({
  selector: 'app-product-detauls',
  templateUrl: './product-detauls.component.html',
  styleUrls: ['./product-detauls.component.css']
})
export class ProductDetaulsComponent {


  customOptions: OwlOptions = {
    loop: true,    
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false 
  }





 details:productInfo |null = null
 
 constructor(private _ActivatedRoute:ActivatedRoute , private _productService:ProductService ,
  private _cartService : CartService
  ){
  _ActivatedRoute.params.subscribe( (data) =>{
    let id = data["id"]

    _productService.getDetails(id).subscribe ({
      next:(req:Productdetails) =>{ 
        this.details= req.data
      }
  } )



})


 }




 addCart(id:string){
  this._cartService.addProductCart(id).subscribe({
    next : (response) => {
      if(response.status == 'success'){
this._cartService.changeCount(response.numOfCartItems)
swal.fire({
  position: 'top-end',
  icon: 'success',
  title: response.message,
  background:'green',
  color:'white',
  showConfirmButton: false,
  timer: 1000
})

      }
      console.log(response);
      
    }
  })
}



}
