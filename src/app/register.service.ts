import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Omit } from './shared-interfaces';

interface UserData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  country: string;
  postalCode: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private fireAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) { }

  public register(userData: UserData): Promise<firebase.auth.UserCredential> {
    return new Promise<any> ((resolve, reject) => {
      const { password, ...rest } = userData;

      this.fireAuth.auth.createUserWithEmailAndPassword(userData.email, password)
        .then(result => resolve(this.registerData(rest, result.user.uid)))
        .catch(reject);
    });
  }

  private registerData = (userData: Omit<UserData, 'password'>, id: string): Promise<void> =>
    this.db.collection('Users').doc(id).set(userData);
}
