import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {GroupPanelPartInitParameters, IContentRenderer } from "dockview-core";
import {IContentResizable} from "../registry/views-regisry.interfaces";
import { GlobalDirectives } from "../../global.config";
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import {
  HlmTabsComponent,
  HlmTabsContentDirective,
  HlmTabsListComponent,
  HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';
import {
  HlmCaptionComponent,
  HlmTableComponent, HlmTableImports,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';
import {NgForOf} from "@angular/common";
import {BrnToggleDirective, BrnToggleGroupComponent} from "@spartan-ng/brain/toggle";
import {NgIcon, provideIcons} from "@ng-icons/core";
import { lucideEye } from "@ng-icons/lucide";
import {HlmSwitchComponent} from "@spartan-ng/ui-switch-helm";

@Component({
  selector: 'app-hierarchy-view',
  templateUrl: './hierarchy-view.component.html',
  imports: [
    //...GlobalDirectives,
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,

    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,

    HlmCaptionComponent,
    HlmTableComponent,
    HlmTdComponent,
    HlmThComponent,
    HlmTrowComponent,
    BrnToggleGroupComponent,
    NgForOf,
    NgIcon,
    HlmTrowComponent,
    HlmTrowComponent,
    HlmTableComponent,
    HlmTableImports,
    HlmSwitchComponent,
    BrnToggleDirective
  ],
  styleUrl: './hierarchy-view.component.css',
  providers: [ provideIcons({ lucideEye }) ]
})
export class HierarchyViewComponent implements IContentRenderer, IContentResizable, OnInit, AfterContentInit {
  public static windowName: string = 'Hierarchy';
  private readonly _element: HTMLElement;
  @ViewChild('componentRoot', { static: false }) componentRoot?: ElementRef<HTMLDivElement>;
  items = Array(16).fill({});

  get element(): HTMLElement {
    return this._element;
  }

  constructor() {
    this._element = document.createElement("div");
  }

  ngAfterContentInit(): void { }

  ngOnInit(): void { }

  init(parameters: GroupPanelPartInitParameters): void { }

  public resize(width: number, height: number) { }
  /*
      layout?(width: number, height: number): void {
      }
      update?(event: PanelUpdateEvent<Parameters>): void {
      }
      toJSON?(): object {
      }
      focus?(): void {
      }
      dispose?(): void {
      }
   */
}
