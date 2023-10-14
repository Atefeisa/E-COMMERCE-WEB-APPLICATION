import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class wishlistService  {
  
  baseUrl: string = 'https://ecommerce.routemisr.com';
 

  cartCount:BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(private _http: HttpClient) { }





  addWishList(id: string): Observable<any> {
    let body = { productId: id };
    return this._http.post(`${this.baseUrl}/api/v1/wishlist`, body);
  }




 





  getAllwishList(): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/v1/wishlist`);
  }





  deleteWishList(id: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}/api/v1/wishlist/${id}`);
  }








}