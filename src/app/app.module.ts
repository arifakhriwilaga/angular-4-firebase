import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyAhSmesjjig7EnC3P5R3rWhRk-psfW_9UY",
  authDomain: "fir-angular-4.firebaseapp.com",
  databaseURL: "https://fir-angular-4.firebaseio.com",
  projectId: "fir-angular-4",
  storageBucket: "fir-angular-4.appspot.com",
  messagingSenderId: "1090342189002"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
