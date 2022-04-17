import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'embed',
})
export class EmbedPipe implements PipeTransform {
  transform(value: string): string {
    const root: string = 'https://www.youtube.com/embed/';
    const lastValue: string = value.split('/').pop();
    return root + lastValue;
  }
}
