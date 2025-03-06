import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[adHost]',
    standalone: false
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
