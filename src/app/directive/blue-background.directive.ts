import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueBackground]'
})
export class BlueBackgroundDirective {

  constructor(element:ElementRef) {
    console.log('element = ',element);
   }

}
