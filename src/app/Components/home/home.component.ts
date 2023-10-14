import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { wishlistService } from 'src/app/Services/wish-list.service';
import { product,products } from 'src/app/interfaces/products';

declare let $ :any
declare let swal : any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  productList:product[]=[]
  wishListData : number []=[]
  searchVal : string =""

  constructor(private _productService: ProductService , private _cartService:CartService,
    private _wishlistService:wishlistService  ) {}




addCart(id:string){
  this._cartService.addProductCart(id).subscribe({
    next : (response) => {
      if(response.status == 'success'){
this._cartService.changeCount(response.numOfCartItems)
 swal.fire({
   position: 'top-end',
   icon:  'success',
   title: response.message,
   background:'green',
   color:'white',
   showConfirmButton: false,
   timer: 1000
 })
      console.log(response);
      
    }
  }
})
}


addToWishList(id:string){
  this._wishlistService.addWishList(id).subscribe({

    next : (response) => {
      this.wishListData = response.data
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


  removeFromWishList(id:string){
    this._wishlistService.deleteWishList(id).subscribe({
  
      next : (response) => {
        console.log(this.wishListData = response.data);
        this.wishListData = response.data
      }
    })
    
    }
  

  getAllData(page:string = "1"){
    this._productService.getAllProducts(page).subscribe({
      next:(data:products) => {
         console.log(data.data);
         this.productList = data.data 
    
      }
    })

  }

  
  ngOnInit(): void {
  this.getAllData()

  this._wishlistService.getAllwishList().subscribe({
    next:(data)=>{
      console.log(data.data);
      let newArr = data.data.map( (item:any)=> item._id)
      this.wishListData = newArr
      }
    })


$(".page1").click((e: any) => {
  let page = $(e.target).text()
  console.log(page);
  this.getAllData(page)
  
})

  }
}

