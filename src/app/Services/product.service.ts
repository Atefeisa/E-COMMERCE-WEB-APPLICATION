import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  BaseUrl: string = 'https://ecommerce.routemisr.com'

  getAllProducts(page:string):Observable<any> {
return this._http.get(`${this.BaseUrl}/api/v1/products?page=${page}`)
  }


    


  getDetails(id:string):Observable<any> {
return this._http.get(`${this.BaseUrl}/api/v1/products/${id}`)
  }

 
  getAllCategory():Observable <any>{

    return this._http.get(`${this.BaseUrl}/api/v1/categories/`)
  }


  getAllBrands():Observable <any>{

    return this._http.get(`${this.BaseUrl}/api/v1/brands/`)
  }

}
