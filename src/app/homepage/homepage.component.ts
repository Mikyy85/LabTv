import { Component, OnInit, ViewChild } from '@angular/core';
import { ImdbApiService } from '../imdb-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  hideItem: boolean = false;

  constructor(private ImdbService: ImdbApiService) {
    this.callAllData();
  }

  top25MoviesList: any[];
  top25TVsList: any[];
  mostPopularMoviesList: any[];
  mostPopularTVsList: any[];

  ngOnInit(): void {}

  callAllData() {
    //TODO remove comment
    this.top25Movies();
    // this.top25TVs();
    // this.mostPopularMovies();
    // this.mostPopularTVs();
  }

  top25Movies() {
    this.ImdbService.getTop250('Movies').subscribe((data) => {
      this.top25MoviesList = data.items.slice(0, 25);
    });
  }
  top25TVs() {
    this.ImdbService.getTop250('TVs').subscribe((data) => {
      this.top25TVsList = data.items.slice(0, 25);
    });
  }

  mostPopularMovies() {
    this.ImdbService.getMostPopular('Movies').subscribe((data) => {
      this.mostPopularMoviesList = data.items.slice(0, 25);
    });
  }
  mostPopularTVs() {
    this.ImdbService.getMostPopular('TVs').subscribe((data) => {
      this.mostPopularTVsList = data.items.slice(0, 25);
    });
  }

  hideAll(hideItem: boolean) {
    this.hideItem = hideItem;
  }
}
