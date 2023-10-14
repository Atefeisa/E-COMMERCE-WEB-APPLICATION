import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productList: product[], searchVal:string): product[] {
    
    
    return    productList.filter( (el) => el.title.toLowerCase().includes(searchVal.toLowerCase()  
    ) );
  }

}
