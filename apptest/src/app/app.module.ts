import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD1Vw546kh6T-PD_0WdSM_WOFh10arPZaw",
    authDomain: "appteste-375c4.firebaseapp.com",
    databaseURL: "https://appteste-375c4.firebaseio.com",
    projectId: "appteste-375c4",
    storageBucket: "appteste-375c4.appspot.com",
    messagingSenderId: "521846470936",
    appId: "1:521846470936:web:e2dea5b5072d08cb4b066d"
    }),
   AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
