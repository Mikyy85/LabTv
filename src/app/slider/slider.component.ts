import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Output() hide = new EventEmitter<any>();

  @Input() sliderHeader: string;

  @Input() sliderData: any = [];

  click: boolean = true;

  constructor() {}

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
    navText: ['Indietro', 'Avanti'],
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
    console.log('backgrount color red');
  }

  showPopup(data: any) {
    if (!this.click) return;
    console.log(data);
  }
}
