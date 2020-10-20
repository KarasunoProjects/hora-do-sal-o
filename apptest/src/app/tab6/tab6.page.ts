import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

<<<<<<< Updated upstream
=======
// 1) importar classes de autenticação
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { loadavg } from 'os';

>>>>>>> Stashed changes
@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
<<<<<<< Updated upstream
=======
  // 3) Metodode Login
  login(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  // 4)Metodo de logout
  logout(){
    this.afAuth.signOut();
    
  }
>>>>>>> Stashed changes

}
