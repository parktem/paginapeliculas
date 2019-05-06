import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../Film.model';

export interface Order {
  title: string;
}

interface ResponseOrders {
  results: Order[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://www.omdbapi.com/';
  apiKey = '33590175';

  constructor(private http: HttpClient) {
    console.log('Se inicializa')
  }

  prueba(title: string){
    console.log('entra a prueba');
  }

  search(title: string) : Film[] {
    let films: Film[] = [];
    this.http.get(this.url + '?s=' + encodeURI(title) + '&apikey=' + this.apiKey).subscribe(data => {
      Object.values(data['Search']).forEach(element => {
        const film = new Film(element['Title'], element['Type'], element['Year'], element['Poster'], element['imdbID']);
        films.push(film);
      });
    });
    console.log('PELICULAS : ', films);
    return films;
   }
}

