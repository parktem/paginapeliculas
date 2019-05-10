import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { NgForm } from '@angular/forms';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent implements OnInit {

  constructor(private authService: MovieService, private appService: AppService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.inicioSesionUsuario(email, password);
  }

  exit(wrapperId: Object) {
    console.log(wrapperId);
    this.appService.showAccess.next(false);
  }

}
