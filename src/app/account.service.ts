import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userId: string;

  constructor(
    private db: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {
    this.userId = this.fireAuth.auth.currentUser.uid;
  }

  public getInitialData = (): Observable<any> =>
    this.db.collection('Users').doc(this.userId).valueChanges()

  public saveFormData = (userData: any): Promise<void> =>
    this.db.collection('Forms').doc(this.userId).set(userData);

  public logout = (): Promise<void> =>
    this.fireAuth.auth.signOut()
}
