import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PopupMovieComponent } from '../popup-movie/popup-movie.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Output() hide = new EventEmitter<any>();

  @Input() sliderHeader: string;

  @Input() sliderData: any = [];

  @Input() isMovie: boolean = false;

  @Input() isTvs: boolean = false;

  click: boolean = true;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  myOption: OwlOptions = {
    loop: true,
    freeDrag: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    lazyLoad: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      600: {
        items: 4,
      },
      740: {
        items: 5,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };

  drag($event: CdkDragMove<any>) {
    this.click = false;
  }

  showPopup(data: any) {
    if (!this.click) return;
    this.dialog.open(PopupMovieComponent, {
      data: {
        data: data,
        isMovie: this.isMovie,
        isTvs: this.isTvs,
      },
    });
  }
}
