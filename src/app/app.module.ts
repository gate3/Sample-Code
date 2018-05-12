import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';

const temp = {
  apiKey: "AIzaSyCd6yiRhCIITnykk--bfA3mwuaBqJAqcYk",
  authDomain: "pvc-location-finder.firebaseapp.com",
  databaseURL: "https://pvc-location-finder.firebaseio.com",
  projectId: "pvc-location-finder",
  messagingSenderId: "366030178333"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(temp),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
