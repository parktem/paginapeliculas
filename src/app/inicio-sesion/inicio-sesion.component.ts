import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent implements OnInit {

  constructor(private authService: MovieService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.inicioSesionUsuario(email, password);
  }

}
