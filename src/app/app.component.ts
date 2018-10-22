import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repertoire-bibliotheque';

  constructor() {
    const config = {
      apiKey: "AIzaSyC4v_Pitw3byvIS28rPnWVed8pz1P-gWTc",
      authDomain: "repertoirebibliotheque.firebaseapp.com",
      databaseURL: "https://repertoirebibliotheque.firebaseio.com",
      projectId: "repertoirebibliotheque",
      storageBucket: "repertoirebibliotheque.appspot.com",
      messagingSenderId: "181531278091"
    };
    firebase.initializeApp(config);
  }
}
