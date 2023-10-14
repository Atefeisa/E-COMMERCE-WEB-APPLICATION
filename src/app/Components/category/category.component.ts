import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categoryData : any[] = []

  constructor (private _productService :ProductService ){}
  

  ngOnInit(): void {
    this._productService.getAllCategory().subscribe({
      next:(response)=>{
        console.log(response.data);
        
        this.categoryData= response.data
  
      }
    })
  }
  }
  


