import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoryComponent } from './Components/category/category.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './Components/forgetPassword/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ProductDetaulsComponent } from './Components/product-details/product-detauls.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SliderComponent } from './Components/slider/slider.component';
import { AddtitlePipe } from './Pipes/addtitle.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HeaderInterceptor } from './header.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './loading.interceptor';
import { CategorySliderComponent } from './Components/category-slider/category-slider.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    BrandsComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProductDetaulsComponent,
    SliderComponent,
    AddtitlePipe,
    SearchPipe,
    CartComponent,
    CheckoutComponent,
    CategorySliderComponent,
    WishListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,   
    FormsModule ,
    NgxSpinnerModule,
  ],
  providers: [
{    provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true } ,

{    provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true } 
 
],

  bootstrap: [AppComponent],
})
export class AppModule {}
