import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'
      ),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  validationData() {
    
  }

  getErrorMail() {
    if (this.email) {
      return this.email.hasError('required')
        ? 'Inserisci un valore'
        : 'Email non valida';
    }
    return '';
  }

  getErrorPassword() {
    if (this.password) {
      return this.password.hasError('required')
        ? 'Inserisci un valore'
        : 'Password non valida';
    }
    return '';
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
