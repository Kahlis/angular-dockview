

import { Injectable } from '@angular/core';
import { DockViewTabItem } from './dockview-tab.model'
import { DockviewTabContentComponent } from '../dockview-tab-content/dockview-tab-content.component'
import {GameViewComponent} from "../../studio/views/game-view/game-view.component";


@Injectable()
export class DockViewTabsService {
    getListOfComponent() {
        return [
            new DockViewTabItem(
                'game-view', // tabId
                'game-view', // componentKey -> todo: change by uuid
                GameViewComponent, // Angular component
                { name: 'Bombasto', bio: 'Brave as they come' } // Some parameters to be used by component
            ),
            new DockViewTabItem(
                'tab2',
                'tab2',
                DockviewTabContentComponent,
                { name: 'Bombasto', bio: 'Brave as they come' }
            ),
        ];
    }
}
