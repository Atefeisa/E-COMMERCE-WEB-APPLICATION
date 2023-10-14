import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtitle'
})
export class AddtitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
