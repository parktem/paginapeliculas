import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../Film.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  urlImage = 'https://image.tmdb.org/t/p/w500';
  apiKey = '20005b2e19e01b863d44227dffe11c0d';
  url = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey;

  constructor(private http: HttpClient) {}

  search(title: string): Film[] {
    const films: Film[] = [];
    this.http.get(this.url + '&query=' + encodeURI(title) + '&language=es').subscribe(data => {
      Object.values(data['results']).forEach(element => {
        let film = new Film();
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
        films.push(film);
      });
    });
    console.log(films);
    return films;
   }

   registroUsuario(email: string, password: string) {
     firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
   }
}

