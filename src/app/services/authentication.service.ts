import { Injectable } from '@angular/core';
import * as auth from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable, of} from "rxjs";

type TSignIn = {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    // public fireStore: AngularFirestore,
    public fireAuth: AngularFireAuth,
  ) { }

  signIn(params: TSignIn) {
    return this.fireAuth
      .signInWithEmailAndPassword(params.email, params.password)
      .then(result => {
        console.log(result.user);
      })
  }
}
