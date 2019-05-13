import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Film } from '../Film.model';
import * as firebase from 'firebase/app';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  tokenUser: string;
  urlImage = 'https://image.tmdb.org/t/p/w500';
  apiKey = '20005b2e19e01b863d44227dffe11c0d';
  urlTMDB = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey;
  urlFirebase = "https://paginapeliculas-d7a99.firebaseio.com/";
  films: Film[] = [];
  title: string;
  email: string;

  constructor(private http: HttpClient, private appService: AppService) {}

  search(title: string): Film[] {
    this.title = title;
    this.films = [];
    this.http.get(this.urlTMDB + '&query=' + encodeURI(title) + '&language=es').subscribe(data => {
      Object.values(data['results']).forEach(element => {
        const film = new Film();
        film.title = element['title'];
        film.adult = element['adult'];
        film.backdropPath = this.urlImage + element['backdrop_path'];
        film.genreIds = element['genre_ids'];
        film.id = element['id'];
        film.originalLanguage = element['original_language'];
        film.originalTitle = element['original_title'];
        film.overview = element['overview'];
        film.popularity = element['popularity'];
        film.posterPath = this.urlImage + element['poster_path'];
        film.releaseDate = element['release_date'];
        film.video = element['video'];
        film.voteCount = element['vote_count'];
        film.voteAverage = element['vote_average'];
        this.films.push(film);
      });
    });
    if (this.email != null) {
      this.recoveryFilms(this.films);
    }
    return this.films;
   }

   recoveryFilms(films: Film[]) {
    this.http.get(this.urlFirebase + encodeURI(this.emailWithoutServerName()) + '.json?auth=' + encodeURI(this.tokenUser)).subscribe(data => {
      Object.values(data).forEach(idFilm => {
        for (let i = 0; i < films.length; i++) {
          if(films[i].id === idFilm) {
            films[i].added = true;
          }
        }
      });
    });
    return films;
   }

  registroUsuario(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    );
  }

  inicioSesionUsuario(email: string, password: string) {
    //firebase.auth().sendPasswordResetEmail(email);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              console.log('TOKEN:', token),
              this.email = email;
              this.tokenUser = token;
              /* logged in */
              this.appService.setLogged(true);
              /* Hide modal */
              this.appService.showAccess.next(false);
              /* Push notification */
              this.appService.showNotification('success', '¡Bienvenido!' + this.emailWithoutServerName());
            }
            );
          }
          )
          .catch(
            error => console.log(error)
            );
  }

  saveFilm(idFilm: string) {
    this.http.post(this.urlFirebase + encodeURI(this.emailWithoutServerName()) + '/' + encodeURI(idFilm) + '.json?auth=' + encodeURI(this.tokenUser), idFilm).subscribe();
  }

  removeFilm(idFilm: string) {
    let httpParams = new HttpParams().set('-LekJOOiVQvWzKEfApeA', '299536');
    let options = { params: httpParams };
    this.http.delete(this.urlFirebase + encodeURI(this.emailWithoutServerName()) + '/' + encodeURI(idFilm) + 'json?auth=' + encodeURI(this.tokenUser), options).subscribe(data => console.log(data));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => {
        console.log('TOKEN DE getToken()', token);
        this.tokenUser = token;
      }
    );
    firebase.auth().signOut();
    return this.tokenUser;
  }

  emailWithoutServerName() {
    return this.email.substring(0, this.email.indexOf('@'));
  }
}

