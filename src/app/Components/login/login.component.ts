import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
 
  loading: boolean = false;
  errorMessage: string = '';
 
 
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,16}$/),
    ]),
  });

  
  submitLogin(formData: FormGroup) {
    this.loading = true;

    console.log(formData.value);

    this._AuthService.login(formData.value).subscribe({
      next: (data) => {
        if (data.message == 'success') {
          this._AuthService.saveUserData(data.user);
          localStorage.setItem('token', data.token);
          this._Router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
