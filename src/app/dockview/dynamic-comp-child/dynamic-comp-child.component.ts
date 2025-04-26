import { Component, Input } from '@angular/core';
import { DynamicChildComponentBase } from '../dynamic-comp-parent/dynamic-comp.model'
@Component({
    selector: 'dockview-dynamic-comp-child',
    templateUrl: './dynamic-comp-child.component.html',
    styleUrls: ['./dynamic-comp-child.component.css'],
    standalone: false
})
export class DynamicCompChildComponent implements DynamicChildComponentBase {
  @Input() data: any;
}
