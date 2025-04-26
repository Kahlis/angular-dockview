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
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective
} from "@spartan-ng/ui-alert-helm";
import {HlmIconDirective} from "@spartan-ng/ui-icon-helm";
import {NgIcon} from "@ng-icons/core";

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  imports: [
    // ...GlobalDirectives,
    HlmAlertDescriptionDirective,
    HlmAlertDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    HlmIconDirective,
    NgIcon
  ],
  styleUrl: './welcome-view.component.css'
})
export class WelcomeViewComponent implements IContentRenderer, IContentResizable, OnInit, AfterContentInit {
    public static windowName: string = 'Welcome';
    private readonly _element: HTMLElement;
    @ViewChild('componentRoot', { static: false }) componentRoot?: ElementRef<HTMLDivElement>;

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
