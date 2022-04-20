import { Component, Inject, OnInit } from '@angular/core';
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

  constructor(
    private imdbService: ImdbApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

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
        directors: result.directors.items,
        actors: result.actors.slice(0, 5),
      };
    });
  }
}
