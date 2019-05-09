import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Film } from '../Film.model';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MovieService]
})
export class SearchComponent implements OnInit {

  films: Film[] = [];

  constructor(private service: MovieService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  searchFilm(film: string) {
    this.films = this.service.search(film);
  }

  openDialog() {
    let dialogRef = this.dialog.open(ModalComponent, {
      height: '400px',
      width: '600px',
    });
  }

  saveFilm(idFilm: object) {
    /* this.service.saveFilm(String(idFilm))
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    ); */
    this.service.getToken();
  }

}
