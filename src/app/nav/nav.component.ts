import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  showAccess() {
    this.appService.showAccess.next(true);
  }

}
