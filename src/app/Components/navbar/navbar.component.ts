import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  isLogin: any = null;

  count : number = 0 

  constructor(private _auth: AuthService, private _cartService:CartService) {
   
    _cartService.cartCount.subscribe((data)=>{
   
      this.count = _cartService.cartCount.getValue()
    })

  }

  logOut() {
    this._auth.logout();
  }

  ngOnInit(): void {
    this._auth.userData.subscribe({
      next: (data) => {
        console.log(data);
        this.isLogin = this._auth.userData.getValue();
      },
    });
  }
}
