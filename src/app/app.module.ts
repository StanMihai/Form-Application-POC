import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire';
import { SignInComponent } from './sign-in/sign-in.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatSnackBarModule,
  MatCheckboxModule,
} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { LoginService } from './login.service';
import { GuardService } from './guard.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AccountService } from './account.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatCheckboxModule,
    MatRadioModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignInComponent,
    RegisterComponent,
  ],
  providers: [ LoginService, GuardService, RegisterService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
