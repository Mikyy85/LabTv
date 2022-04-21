import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImdbApiService } from '../imdb-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  comingSoonData: any;
  trailers: any[] = [];
  inTeatro: any;
  isReady: boolean = false;

  constructor(
    private ImdbService: ImdbApiService,
    private sanitizer: DomSanitizer
  ) {
    this.getComingSoon();
    this.getInTheater();
  }

  myOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
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
        items: 1,
      },
    },
    nav: true,
  };

  ngOnInit(): void {}

  getComingSoon() {
    this.ImdbService.getOther('ComingSoon').subscribe((data) => {
      this.comingSoonData = data.items.slice(0, 3).map((d) => {
        return {
          id: d.id,
          title: d.title,
          image: d.image,
          dataUscita: d.releaseState,
        };
      });
    });
  }

  getInTheater() {
    this.ImdbService.getOther('InTheaters').subscribe((data) => {
      this.inTeatro = data.items.slice(0, 2).map((d) => {
        this.getTrailer(d.id);
      });
    });
  }

  getTrailer(id: string) {
    this.ImdbService.getTrailer(id).subscribe((data: any) =>
      this.trailers.push(this.linkURL(data.linkEmbed))
    );
  }

  linkURL(link: string) {
    return this.sanitizer.bypassSecurityTrustHtml(link);
  }
}
