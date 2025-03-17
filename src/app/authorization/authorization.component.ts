import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-authorization',
  imports: [ReactiveFormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent {
  public register: boolean = false;
  public login: boolean = true;
  public isVisited!: boolean;

  public signInForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  public RegisterForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    currencyPreference: new FormControl('')
  });

  useRegister() {
    this.register = true;
    this.login = false;
    this.isVisited = false;
  }
  useLogin() {
    this.register = false;
    this.login = true;
    this.isVisited = true;
  }
}
