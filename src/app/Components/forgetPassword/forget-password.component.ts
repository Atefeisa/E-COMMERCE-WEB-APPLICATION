import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from './../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})


export class ForgetPasswordComponent {

errorMsg : string = ""  
constructor(private _auth:AuthService , private _router:Router ){}

  forgetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });



  forgetPasswordSubmit(form:FormGroup){
 this._auth.forgotPasswords(form.value).subscribe({



next:(data) => {
console.log(data);
 if(data.statusMsg = "Success"){
   document.querySelector(".resetCode")?.classList.remove("d-none")
   document.querySelector(".forgetPassword")?.classList.add("d-none")
 }
},

error:(err) =>{
  console.log(err);
  
},

complete:() =>{}




})
  }




  resetCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
  });




 ResetCodeSubmit(form:FormGroup){

  this._auth.verifyResetCode(form.value).subscribe({

    next:(data) => {
    console.log(data);
    if(data.status = "Success"){
      this._router.navigate(['/resetPassword'])
    }
    },
    
    error:(err) =>{
      this.errorMsg = err.error.message
     
      console.log(err.error.message);
      
    },
    
    complete:() =>{
      console.log(form.value);
      
    }
    
    
    
    
    })
    
    }






}
