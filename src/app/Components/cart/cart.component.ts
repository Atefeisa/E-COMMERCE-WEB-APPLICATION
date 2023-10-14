import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { CartData } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
 
   cartData: CartData | null = null;
 
  constructor( private _cartService:CartService){}



  updateQuantity(id: string, count: number){

   if(count>0){
    this._cartService.updateCartQuantity(id,count).subscribe({

      next:(response : CartData) => {
        this.cartData = response
        console.log(response);
        
      }
    
    })
   }

  }






  deleteProduct(id:string){
    this._cartService.deleteProduct(id).subscribe({
    
      next:(response : CartData) => {
        this.cartData = response
        console.log(response);
        
        this._cartService.changeCount(response.numOfCartItems)

      }
      
    })
    }
  




  clearCart(){
    this._cartService.clearCart().subscribe({

      next:(response ) => {
        if(response.message == "success"){}
        this.cartData = null
        console.log(response);
        
      }
  
  
    })
  }
    




ngOnInit(): void {
  this._cartService.getAllProduct().subscribe({

    next:(response : CartData) => {
      this.cartData = response
      console.log(response);


    this._cartService.changeCount(response.numOfCartItems)

    }


  })
}


}
