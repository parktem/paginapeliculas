import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private logged = false;
  notification: Subject<{type: string, message: string}> = new Subject();
  showAccess: Subject<boolean> = new Subject();

  constructor() {}

  isLogged() {
    return this.logged;
  }

  setLogged(logged) {
    this.logged = logged;
  }

  showNotification(type: string, message: string) {
    this.notification.next({type, message});
  }
}
