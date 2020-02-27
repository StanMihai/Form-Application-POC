import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private fireAuth: AngularFireAuth,
  ) { }

  public login = (username: string, password: string): Promise<firebase.auth.UserCredential> =>
    this.fireAuth.auth.signInWithEmailAndPassword(username, password)
}