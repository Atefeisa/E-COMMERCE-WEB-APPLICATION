import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { wishlistService } from 'src/app/Services/wish-list.service';
import { product,products } from 'src/app/interfaces/products';

declare let swal :any

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  productList:product[]=[]


  constructor( private _wishlistService:wishlistService ,private _ProductService:ProductService ,
    private _cartService:CartService){}



  addCart(id:string){
    this._cartService.addProductCart(id).subscribe({
      next : (response) => {
        if(response.status == 'success'){
  this._cartService.changeCount(response.numOfCartItems)
  this.deleteFavList(id)
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
  

getAllList(){
  this._wishlistService.getAllwishList().subscribe({

    next:(response:products) => {
        
      console.log(response.data);
      this.productList = response.data}
  })
}



  addToWishList(id:string){
    this._wishlistService.addWishList(id).subscribe({

      next : (response) => {
        console.log(response);
        if(response.status == 'success'){
        
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
      }
    })
  }



  deleteFavList(id:string){
    
    this._wishlistService.deleteWishList(id).subscribe({
     
      next:(response:products) => {
        this.getAllList()
        console.log(response.data);
        this.productList = response.data  
     }
    })
    }
 




 ngOnInit(): void {

  this._wishlistService.getAllwishList().subscribe({

    next:(data:products) => {
      console.log(data.data);
      this.productList = data.data 
 
   }
  })

  } 
}
