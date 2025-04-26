import {DefaultPanel} from "../../../dockview/dockiewService";
import {GameViewComponent} from "../game-view/game-view.component";
import {IContentRenderer, Parameters} from "dockview-core";
import {Injectable, Type} from "@angular/core";
import {DockViewTabItem} from "../../../dockview/dockview-tabs/dockview-tab.model";
import {DockviewTabContentComponent} from "../../../dockview/dockview-tab-content/dockview-tab-content.component";
import {IDockIndex, IDockViewTabItem} from "./views-regisry.interfaces";
import {WelcomeViewComponent} from "../welcome-view/welcome-view.component";
import {HierarchyViewComponent} from "../hierarchy-view/hierarchy-view.component";

const docksIndex: IDockIndex = {
  'game-view': {
    id: GameViewComponent.windowName, // Dock panel name
    componentKey: 'game-view', // componentKey -> todo: change by uuid
    component: new GameViewComponent(), // Angular component
    type: GameViewComponent,
    params: {  } // Some parameters to be used by component
  },
  'hierarchy-view': {
    id: HierarchyViewComponent.windowName, // Dock panel name
    componentKey: 'hierarchy-view', // componentKey -> todo: change by uuid
    component: new HierarchyViewComponent(), // Angular component
    type: HierarchyViewComponent,
    params: {  } // Some parameters to be used by component
  },
  'welcome-view': {
    id: WelcomeViewComponent.windowName, // Dock panel name
    componentKey: 'welcome-view', // componentKey -> todo: change by uuid
    component: new WelcomeViewComponent(), // Angular component
    type: WelcomeViewComponent,
    params: {  } // Some parameters to be used by component
  },
  'default': {
    id: 'unknown', // Dock panel name
    componentKey: 'unknown', // componentKey -> todo: change by uuid
    component: new DefaultPanel(), // Angular component
    type: DefaultPanel,
    params: {  } // Some parameters to be used by component
  }
}

const docksLayout: Array<IDockViewTabItem> = [
  docksIndex['game-view'],
  docksIndex['welcome-view'],
  docksIndex['hierarchy-view'],
];

@Injectable()
export class DockViewTabsService {
  getViewByName =
    (name: string) => docksIndex[name] ? docksIndex[name].component : docksIndex["default"].component;

  getListOfComponent = () => docksLayout;

  getIndex = (): IDockIndex => docksIndex;
}
