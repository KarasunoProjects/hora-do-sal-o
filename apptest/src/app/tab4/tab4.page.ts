import { Component, OnInit } from '@angular/core';

// 1) importar classes de autenticação
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    // 2)criando  objeto de autenticação
  public afAuth: AngularFireAuth)
   { }

  ngOnInit() {
  }
   // 3) Metodode Login
   login(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  // 4)Metodo de logout
  logout(){
    this.afAuth.signOut();
  }

}
