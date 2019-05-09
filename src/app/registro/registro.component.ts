import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  correctData: boolean = false;

  constructor(private authService: MovieService) { }

  ngOnInit() {}

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const secondPassword = form.value.secondPassword;
    if (this.checkData(email, password, secondPassword)) {
      this.authService.registroUsuario(email, password);
    } else {
      this.correctData = true;
    }

  }

  checkData(email: string, password: string, secondPassword: string): boolean {
    return password === secondPassword ? true : false;
  }

}
