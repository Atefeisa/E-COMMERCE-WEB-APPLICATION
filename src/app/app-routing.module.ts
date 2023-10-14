import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { ProductComponent } from './Components/product/product.component';
import { CategoryComponent } from './Components/category/category.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { authGuard } from './auth.guard';
import { ForgetPasswordComponent } from './Components/forgetPassword/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ProductDetaulsComponent } from './Components/product-details/product-detauls.component';
import { SliderComponent } from './Components/slider/slider.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full',title:'login' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent,title:'home' },
  { path: 'brand', canActivate: [authGuard], component: BrandsComponent ,title:'brand' },
  { path: 'product', canActivate: [authGuard], component: ProductComponent ,title:'product' },
  { path: 'category', canActivate: [authGuard], component: CategoryComponent  ,title:'category'},
  { path: 'cart', canActivate: [authGuard], component: CartComponent ,title:'cart'},
  { path: 'wishList', canActivate: [authGuard], component: WishListComponent  ,title:'wish list'},
  { path: 'checkout/:id', canActivate: [authGuard], component: CheckoutComponent ,title:'check out' },
  { path: 'productDetails/:id', canActivate: [authGuard], component: ProductDetaulsComponent ,title:'details' },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'slider', component: SliderComponent },
  { path: '**', component: NotfoundComponent ,title:'404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
