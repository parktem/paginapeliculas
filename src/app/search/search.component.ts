import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Film } from '../Film.model';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  films: Film[] = [];
  title: string;

  constructor(private service: MovieService, private dialog: MatDialog) {
  }

  ngOnInit() {
    /* Get films */
    this.films = this.service.films;
    this.title = this.service.title;
  }

  searchFilm() {
    if (this.title) {
      this.films = this.service.search(this.title);
    }
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
