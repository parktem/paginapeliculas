import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: MovieService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form.value.email);
    const email = form.value.email;
    const password = form.value.password;
    this.authService.registroUsuario(email, password);
  }

}
