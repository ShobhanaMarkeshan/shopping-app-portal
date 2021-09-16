import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fontFormat'
})
export class FontFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(' pipe value = ', value);
    return value;
  }

}
