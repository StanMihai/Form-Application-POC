import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class GuardService implements CanActivate {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {  }

  canActivate(): boolean {
    if (this.fireAuth.auth.currentUser) {
      return true;
    }

    this.router.navigateByUrl('/sign-in');
    return false;
  }
}