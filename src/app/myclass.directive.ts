import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyclass]'
})
export class MyclassDirective {

  constructor(elRef: ElementRef) {
    elRef.nativeElement.style.color = 'white';
    elRef.nativeElement.style.backgroundColor = 'green';
    elRef.nativeElement.style.fontSize = '20px';
   }
  
}
