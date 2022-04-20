import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMovieComponent } from './popup-movie.component';

describe('PopupMovieComponent', () => {
  let component: PopupMovieComponent;
  let fixture: ComponentFixture<PopupMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
