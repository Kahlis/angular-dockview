import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dockview-tab-host]',
    standalone: false
})
export class DockViewTabContentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
