import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Film } from '../Film.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MovieService]
})
export class SearchComponent implements OnInit {

  films: Film[] = [];

  constructor(private service: MovieService) { }

  ngOnInit() {
  }

  searchFilm(film: string) {
    this.films = this.service.search(film);
  }

}
