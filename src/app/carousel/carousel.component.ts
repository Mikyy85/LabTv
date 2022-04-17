import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImdbApiService } from '../imdb-api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  comingSoonData: any;

  constructor(private ImdbService: ImdbApiService) {
    //TODO remove comment
    this.getComingSoon();
  }

  myOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  comingSoon: any[];

  ngOnInit(): void {}

  getComingSoon() {
    this.ImdbService.getOther('ComingSoon').subscribe((data) => {
      this.comingSoonData = data.items.slice(5, 8).map((d) => {
        return {
          id: d.id,
          title: d.title,
          image: d.image,
          dataUscita: d.releaseState,
        };
      });
    });
  }
}
