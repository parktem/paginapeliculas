import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showAccess: Subject<boolean> = new Subject();

  constructor() {}
}
