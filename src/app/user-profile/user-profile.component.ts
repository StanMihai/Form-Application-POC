import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'app/account.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public accountFrom: FormGroup;
  public userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private detailsService: AccountService,
  ) { }

  ngOnInit() {
    this.setupForm()

    this.detailsService.getInitialData()
      .subscribe(data => {
        this.userData = data;
        this.accountFrom.setValue(data)
      },
      error => console.log(error));
  }

  private setupForm() {
    this.accountFrom = this.formBuilder.group({
      name: [{
        value: '',
        disabled: true
      }, [Validators.required]],
      surname: [{
        value: '',
        disabled: true
      }, [Validators.required]],
      email: [{
        value: '',
        disabled: true
      }, [Validators.required, Validators.email]],
      phone: [{
        value: '',
        disabled: true
      }, [Validators.required, Validators.minLength(10)]],
      city: [{
        value: '',
        disabled: true
      }, [Validators.required, Validators.minLength(3)]],
      address: [{
        value: '',
        disabled: true
      }, [Validators.required, Validators.minLength(3)]],
      country: [{
        value: '',
        disabled: true
      }, [Validators.required, Validators.minLength(3)]],
      postalCode: [{
        value: '',
        disabled: true
      }, [Validators.required, Validators.minLength(3)]],
    });
  }
}
