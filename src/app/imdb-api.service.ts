import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImdbApiService {
  private rootLink: string = environment.ROOT_API_LINK;
  private key: string = environment.API_KEY;

  constructor(private http: HttpClient) {}

  getTop250(type: string) {
    return this.http.get<any>(`${this.rootLink}top250${type}/${this.key}`);
  }

  getMostPopular(type: string) {
    return this.http.get<any>(`${this.rootLink}mostPopular${type}/${this.key}`);
  }

  getOther(type: string) {
    return this.http.get<any>(`${this.rootLink}${type}/${this.key}`);
  }

  getYoutubeTrailer(id: string) {
    return this.http.get<any>(
      `${this.rootLink}youtubeTrailer/${this.key}/${id}`
    );
  }

  searchTitle(expression: string) {
    return this.http.get<any>(
      `${this.rootLink}searchTitle/${this.key}/${expression}`
    );
  }

  modifyLink(link: string): string {
    const root: string = 'https://www.youtube.com/embed/';
    const lastValue: string = link.split('?v=').pop();
    return root + lastValue;
  }

  fullCast(id:string) {
    return this.http.get<any>(
      `${this.rootLink}fullCast/${this.key}/${id}`
    );
  }
}
