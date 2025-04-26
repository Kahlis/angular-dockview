import { Component, OnInit } from '@angular/core';
import { DynamicCompItem } from './dynamic-comp-parent/dynamic-comp.model';
import { DynamicCompService } from './dynamic-comp-parent/dynamic-comp.service';
import {NgIcon, provideIcons} from "@ng-icons/core";
import { lucideBox } from "@ng-icons/lucide";
import {hlmSmall} from "@spartan-ng/ui-typography-helm";

@Component({
  selector: 'dockview-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'angular-dockview';
  compList: DynamicCompItem[] = [];

  constructor(private dynamicCompServ: DynamicCompService) { }
  ngOnInit(): void {
    this.compList = this.dynamicCompServ.getListOfComponent()
  }

  protected readonly hlmSmall = hlmSmall;
  protected readonly lucideBox = lucideBox;
}
