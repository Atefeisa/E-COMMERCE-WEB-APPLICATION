import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://ecommerce.routemisr.com'
  



  constructor(private _HttpClient: HttpClient ,private _Router:Router) {
    if (localStorage.getItem("token")) {

      let token: string | null = localStorage.getItem("token")
      if (token != null) {

        let data = jwtDecode(token)
        console.log(data);
        this.saveUserData(data)
        this._Router.navigate(['/home'])
      }
    }
  }
  
  userData: BehaviorSubject<any> = new BehaviorSubject(null)

  saveUserData(data: any) {
    this.userData.next(data)
  }


  logout() {
    localStorage.removeItem("token")
    this.saveUserData(null)
    this._Router.navigate(['/login'])
  }


  register(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`, data)
  }

  login(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`, data)
  }
  
  forgotPasswords(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`, data)
  }

  verifyResetCode(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`, data)
  }

  resetPassword(data: any): Observable<any> {
    return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`, data)
  }


}
