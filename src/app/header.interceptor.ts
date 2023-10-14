import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  let token :any = localStorage.getItem("token")
  if(token){
    let newReq = request.clone({
      headers:request.headers.set("token",token)
    })
  
  
      return next.handle(newReq);
    }
    else
    {
      return next.handle(request);
    }

  }
}
