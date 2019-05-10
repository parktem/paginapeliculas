import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MY-APP';
  showAccess = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.showAccess.subscribe((data: boolean) => {
      this.showAccess = data;
    });

    firebase.initializeApp({
      apiKey: "AIzaSyAnkyH8peI52bz62pIkPK61io4a3OvlGis",
      authDomain: "paginapeliculas-d7a99.firebaseapp.com"
    });
  }
}
