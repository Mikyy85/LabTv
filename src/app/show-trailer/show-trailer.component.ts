import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ImdbApiService } from '../imdb-api.service';

@Component({
  selector: 'app-show-trailer',
  templateUrl: './show-trailer.component.html',
  styleUrls: ['./show-trailer.component.scss'],
})
export class ShowTrailerComponent implements OnInit {
  linkTrailer: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer,
    private imdbService: ImdbApiService
  ) {}

  getTrailer() {
    this.imdbService.getYoutubeTrailer(this.data.id).subscribe((data) => {
      this.linkTrailer = data.videoUrl;
    });
  }

  ngOnInit(): void {
    this.getTrailer();
  }

  linkURL() {
    const embedLink = this.imdbService.modifyLink(this.linkTrailer);
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
  }
}
