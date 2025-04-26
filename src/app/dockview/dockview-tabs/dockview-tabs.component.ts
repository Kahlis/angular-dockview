import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  createComponent,
  ElementRef, inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren, ViewContainerRef
} from '@angular/core';
import {CreateComponentOptions, DockviewComponent, DockviewComponentOptions} from 'dockview-core';
import { DefaultPanel } from '../dockiewService';
import { DockviewTabContent } from '../dockview-tab-content/dockview-tab-content.renderer';
import { DockViewTabsService } from "../../studio/views/registry/views-registry.service";
import { DockViewTabContentHostDirective } from '../dockview-tab-content-host-directive/dockview-tab-content-host.directive';
import { DockviewTabContentComponent } from '../dockview-tab-content/dockview-tab-content.component';
import {GameViewComponent} from "../../studio/views/game-view/game-view.component";
import {config} from "../../../main.config";
import {WelcomeViewComponent} from "../../studio/views/welcome-view/welcome-view.component";
import {IDockViewTabItem} from "../../studio/views/registry/views-regisry.interfaces";

@Component({
    selector: 'dockview-dockview-tabs',
    templateUrl: './dockview-tabs.component.html',
    styleUrls: ['./dockview-tabs.component.css'],
    standalone: false
})

export class DockviewTabsComponent implements AfterViewInit, OnInit, AfterViewChecked {
  @ViewChild('dockviewroot', { static: false }) divDockViewRoot?: ElementRef<HTMLDivElement>;
  @ViewChild(DockViewTabContentHostDirective, { static: true }) hostContent!: DockViewTabContentHostDirective;

  @ViewChildren(DockViewTabContentHostDirective)
  private hostTabsContent!: QueryList<DockViewTabContentHostDirective>;
  private viewContainerRef = inject(ViewContainerRef);

  constructor(private dockViewTabsService: DockViewTabsService) {

  }
  ngAfterViewChecked(): void {

  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if (this.divDockViewRoot) {

      const options: DockviewComponentOptions = {
        createComponent: (options) => this.dockViewTabsService.getViewByName(options.name)
      }

      const dockview = new DockviewComponent(this.divDockViewRoot.nativeElement, options);
      const { clientWidth, clientHeight } = this.divDockViewRoot.nativeElement;
      dockview.layout(clientWidth, clientHeight);

      const tabs: { [id: string]: IDockViewTabItem | any } = [];
      for (let tabItem of this.dockViewTabsService.getListOfComponent()) {
        const panelApi = dockview.addPanel({
          id: tabItem.id,
          component: tabItem.componentKey,
          params: tabItem.params,
        }).api;

        tabs[tabItem.id] = tabItem;
        panelApi.onDidDimensionsChange(() => {
          tabItem.component.resize(panelApi.width, panelApi.height);
        })
      }

      for (let p of dockview.panels) {
        let tabContentComponentInstance = this.hostContent.viewContainerRef.createComponent(tabs[p.id].type);
        p.view.content.element.appendChild(tabContentComponentInstance.location.nativeElement);
        /*
          let viewComp = p.view.content as DockviewTabContentComponent
          viewComp.onDestroy.bind(() => {
            tabContentComponentInstance.destroy()
          });
        */
      }
      /*
      console.log('dom query', this.divDockViewRoot.nativeElement.querySelectorAll('div.dockview-tab-content-host'))
      */
    }
  }

  protected readonly theme = config.theme.path;
}
