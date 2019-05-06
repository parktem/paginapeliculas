export class Film {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;

  constructor(title: string, type: string, year: string, poster: string, imdbID: string) {
    this.poster = poster;
    this.title = title;
    this.type = type;
    this.year = year;
    this.imdbID = imdbID;
  }
}
