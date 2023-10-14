import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  loading: boolean = false;
  errorMessage: string = '';

  resetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9@#$%^&*]{3,16}$/),
    ]),
  });

  submitReset(formData: FormGroup) {
    this.loading = true;

    console.log(formData.value);

    this._AuthService.resetPassword(formData.value).subscribe({
      next: (data) => {
        if (data.token) {
          // this._AuthService.saveUserData(data.user)
          // localStorage.setItem("token", data.token)
          this._Router.navigate(['/login']);
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
