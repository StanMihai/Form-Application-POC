import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginService } from 'app/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public onSubmit = () => {
    const { email, password } = this.loginForm.value;

    if (this.loginForm.valid) {
      this.loginService.login(email, password)
      .then(() => this.router.navigateByUrl('/user-profile'))
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          this.snackBar.open('Email-ul este incorect', 'Inchide');
        }

        if (error.code === 'auth/wrong-password') {
          this.snackBar.open('Parola este incorecta', 'Inchide');
        }
      });
    }
  }
}
