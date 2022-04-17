import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.scss'],
})
export class CardResultComponent implements OnInit {
  @Input()
  data: any;

  constructor() {}

  ngOnInit(): void {}
}
