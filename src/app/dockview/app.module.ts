import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DockviewTabsComponent } from './dockview-tabs/dockview-tabs.component';
import { DockviewTabContentComponent } from './dockview-tab-content/dockview-tab-content.component';
import { DynamicCompParentComponent } from './dynamic-comp-parent/dynamic-comp-parent.component';
import { DynamicCompChildComponent } from './dynamic-comp-child/dynamic-comp-child.component';
import { AdDirective } from './add-directive/ad-directive.directive';
import { DynamicCompService } from './dynamic-comp-parent/dynamic-comp.service';
import { DockViewTabsService } from "../studio/views/registry/views-registry.service";
import { DockViewTabContentHostDirective } from './dockview-tab-content-host-directive/dockview-tab-content-host.directive';
import { GameViewComponent } from "../studio/views/game-view/game-view.component";
import { HlmLabelDirective } from "@spartan-ng/ui-label-helm";
import { GlobalDirectives } from "../studio/global.config";

import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/ui-alert-helm';

import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmIconDirective} from "@spartan-ng/ui-icon-helm";
import {NgIcon, provideIcons} from "@ng-icons/core";
import { lucideFeather, lucideEye } from "@ng-icons/lucide";

@NgModule({
  declarations: [
    AppComponent,
    DockviewTabsComponent,
    DockviewTabContentComponent,
    DynamicCompParentComponent,
    DynamicCompChildComponent,DockViewTabContentHostDirective,
    AdDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIcon,
    ...GlobalDirectives,
    HlmLabelDirective,
    HlmAlertDescriptionDirective,
    HlmAlertDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    HlmInputDirective,
    HlmIconDirective,
    GameViewComponent
  ],
  providers: [DynamicCompService,DockViewTabsService, provideIcons({ lucideFeather, lucideEye })],
  bootstrap: [AppComponent],

})
export class AppModule { }
