import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {



  constructor(private _AuthService: AuthService, private _Router: Router) {}
  loading: boolean = false;
  errorMessage: string = '';


  
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,16}$/),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[1250][0-9]{8}$/),
      ]),
    },
    { validators: this.RePasswordMatch }
  );








  RePasswordMatch(form: any) {
    let password = form.get('password');
    let rePassword = form.get('rePassword');
    if (password?.value == rePassword?.value) {
      return null;
    } else {
      rePassword?.setErrors({ repassword: 'rePassword not match' });
      return { repassword: 'rePassword not match' };
    }
  }








  submitRegister(formData: FormGroup) {
    this.loading = true;
    console.log(formData.value);
    this._AuthService.register(formData.value).subscribe({
      next: (data) => {
        console.log(data);
        if (data.message == 'success') {
          this._Router.navigate(['/login']);
        }
      },

      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
        this.loading = false;
      },

      complete: () => {
        this.loading = false;
      },
    });
  }
}
