import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
 

  cartCount:BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(private _http: HttpClient) {

    if(localStorage.getItem("token")){
      this.getAllProduct().subscribe({
        next:(response)=>{
      this.changeCount(response.numOfCartItems)
        }
      })
    }

  }


  changeCount(data:number){
      if (data == undefined) {
        this.cartCount.next(0)
        console.log(this.cartCount);
        
      }else{
        this.cartCount.next(data)
      }
  
    }









  addProductCart(id: string): Observable<any> {
    let body = { productId: id };
    return this._http.post(`${this.baseUrl}/api/v1/cart`, body);
  }



  getAllProduct(): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/v1/cart`);
  }


  deleteProduct(id: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}/api/v1/cart/${id}`);
  }


  clearCart(): Observable<any> {
    return this._http.delete(`${this.baseUrl}/api/v1/cart`);
  }

  updateCartQuantity(id: string, count: number): Observable<any> {
    let body = { count: count };

    return this._http.put(`${this.baseUrl}/api/v1/cart/${id}`,body);

  }

checkPayment(cartId:string,dataShipping:any) : Observable<any>{
  let body = { shippingAddress: dataShipping };

  return this._http.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,body);
}





}


