import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImdbApiService } from '../imdb-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-movie',
  templateUrl: './popup-movie.component.html',
  styleUrls: ['./popup-movie.component.scss'],
})
export class PopupMovieComponent implements OnInit {
  textButton: String = 'Mostra Altro';
  active: boolean = false;
  fullCast: any = {};
  tvsInfo: any = {};
  movieInfo: any = {};

  isMovie: boolean = this.data.isMovie;

  isTvs: boolean = this.data.isTvs;

  constructor(
    private imdbService: ImdbApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.isTvs) this.getTvsInfo();
    if (this.isMovie) this.getMovieInfo();
  }

  moreInfo() {
    this.getFullCast();
    if (this.active) {
      this.active = false;
      this.textButton = 'Mosta Altro';
    } else {
      this.active = true;
      this.textButton = 'Mostra Meno';
    }
  }

  getFullCast() {
    this.imdbService.fullCast(this.data.data.id).subscribe((result) => {
      this.fullCast = {
        directors: result.directors.items.slice(0, 5),
        actors: result.actors.slice(0, 5),
      };
    });
  }

  getTvsInfo() {
    this.imdbService.getAllInfo(this.data.data.id).subscribe((result) => {
      this.tvsInfo = {
        plot: result.plot,
        numSeason: result.tvSeriesInfo.seasons.length,
        stars: result.stars,
        genres: result.genres,
      };
    });
  }

  getMovieInfo() {
    this.imdbService.getAllInfo(this.data.data.id).subscribe((result) => {
      this.movieInfo = {
        plot: result.plot,
        min: result.runtimeStr,
        stars: result.stars,
        genres: result.genres,
      };
    });
  }
}
