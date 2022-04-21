import { Component, Input, OnInit } from '@angular/core';
import { ImdbApiService } from '../imdb-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShowTrailerComponent } from '../show-trailer/show-trailer.component';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  @Input() comingSoon: any;
  linkTrailer: string = '';

  constructor(private imdbService: ImdbApiService, private dialog: MatDialog) {}

  showPopup() {
    this.dialog.open(ShowTrailerComponent, {
      data: {
        id: this.comingSoon.id,
      },
    });
  }

  ngOnInit(): void {}
}
