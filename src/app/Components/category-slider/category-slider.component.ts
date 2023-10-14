import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit{

 categorySlider :any [] =[] 
constructor( private _ProductService : ProductService){}



customOptions: OwlOptions = {
  loop: true,
  // dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 6
    }
  },
  // nav: false 
}




ngOnInit(): void {
  this._ProductService.getAllCategory().subscribe({
    next:(response)=>{
      console.log(response.data);
      
      this.categorySlider = response.data

    }
  })
}
}
