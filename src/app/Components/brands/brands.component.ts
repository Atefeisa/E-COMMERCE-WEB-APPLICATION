import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent  implements OnInit{

  brandsData : any[] = []

  constructor (private _productService :ProductService ){}
  

  ngOnInit(): void {
    this._productService.getAllBrands().subscribe({
      next:(response)=>{
        console.log(response.data);
        
        this.brandsData= response.data
  
      }
    })
  }
  }
