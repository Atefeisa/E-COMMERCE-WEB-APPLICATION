import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
id : string = ''
  constructor(private _cartService:CartService,private _ActivatedRoute : ActivatedRoute){
    _ActivatedRoute.params.subscribe((data : any)=>{

      this.id = data.id
      
    })
  }


shippingForm :FormGroup = new FormGroup ({

  details : new FormControl (null , [Validators.required]),
  city : new FormControl (null , [Validators.required]),
  phone: new FormControl(null, [Validators.required,Validators.pattern(/^01[1250][0-9]{8}$/),
  ]),
})

sendPayment(formData : FormGroup){

console.log(formData.value);

this._cartService.checkPayment( this.id,formData.value).subscribe({

  next:(response)=>{

    window.location.href = response.session.url

    console.log(response.session.url);
    
  }
})


}
}
