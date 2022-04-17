import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImdbApiService } from '../imdb-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit{
  textPlaceholder: string = 'Cosa vuoi cercare?';
  searchTherm: string = '';
  results: any = [];
  patchImage: string = '"/../assets/images/LabTvLogoMini.png"';
  data: any = {};

  @Output() hide = new EventEmitter<boolean>();
  searching: boolean = false;

  constructor(private ImdbApiService: ImdbApiService) {}

  ngOnInit(): void {}

  searchVideo() {
    this.results = null;
    if (this.searchTherm && this.searchTherm.length > 3) {
      this.data = this.ImdbApiService.searchTitle(this.searchTherm).subscribe(
        (res: any) => {
          this.searching = true;
          this.sendHome();
          this.results = res.results;
        }
      );
    }
  }

  sendHome() {
    this.hide.emit(this.searching);
  }

  showHome() {
    this.hide.emit(false);
    this.results = null;
  }
}
