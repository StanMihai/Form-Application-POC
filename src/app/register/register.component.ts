import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'app/register.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerFrom: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.registerFrom = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      postalCode: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public onSubmit = () => {
    if (!this.registerFrom.valid) {
      return;
    }

    const { confirmPassword, ...rest } = this.registerFrom.value;

    if (confirmPassword !== rest.password) {
      this.snackBar.open('Cele 2 parole introduse nu se potrivesc!', 'Inchide');

      return;
    }

    this.snackBar.open('Am inceput procesul de inregistrare...', 'Inchide', {
      duration: 1400,
    });

    this.registerService.register(rest)
      .then(() => {
        this.snackBar.open('Cont creat cu succes, redirectare la login...', 'Inchide', {
          duration: 1400,
        });

        setTimeout(() => {
          this.router.navigateByUrl('/sign-in');
        }, 1500);
      })
      .catch(error => this.snackBar.open(error.message, 'Inchide'));
  }
}
