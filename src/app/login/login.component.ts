import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl<string>("", [Validators.required]),
    password: new FormControl<string>("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  login() {
    const { userName, password } = this.loginForm.value;
    this.authenticationService.signIn({
      email: userName as string,
      password: password as string,
    })
    this.router.navigate(["/profile"]);
  }
}
