import {
  DockviewComponent,
  DockviewComponentOptions,
  IContentRenderer,
  IGroupPanelInitParameters, IPanelDeserializer,
  PanelUpdateEvent,
  Parameters,
} from 'dockview-core';
import { IContentResizable } from "../studio/views/registry/views-regisry.interfaces";

export class DefaultPanel implements IContentRenderer, IContentResizable {
    private _element: HTMLElement;

    get element(): HTMLElement {
        return this._element;
    }

    constructor() {
        this._element = document.createElement('div');
        this._element.style.padding = '20px';
        this._element.style.color = 'white';
    }

    resize(width: number, height: number): void {
    }

    onDestroy(): void {}

    init(parameters: IGroupPanelInitParameters): void {
        this._element.textContent = parameters.params['title'];
    }

    update(event: PanelUpdateEvent<Parameters>): void {
        this._element.textContent = event.params['title'];
    }
}

export function attach(parent: HTMLElement): {
    dispose: () => void;
} {
    const element = document.createElement('div');
    element.className = 'dockview-theme-abyss  skinny-tabs';
    element.style.height = '100%';
    element.style.width = '100%';

    const options: DockviewComponentOptions = {
      createComponent: (_) => new DefaultPanel()
    };

    const dockview = new DockviewComponent(element, options);

    parent.appendChild(element);

    const { clientWidth, clientHeight } = parent;
    dockview.layout(clientWidth, clientHeight);

    dockview.addPanel({
        id: 'panel_1',
        component: 'default',
        params: {
            title: 'Panel 1',
        },
    });

    dockview.addPanel({
        id: 'panel_2',
        component: 'default',
        params: {
            title: 'Panel 2',
        },
    });

    dockview.addPanel({
        id: 'panel_3',
        component: 'default',
        params: {
            title: 'Panel 3',
        },
        position: { referencePanel: 'panel_1', direction: 'right' },
    });

    dockview.addPanel({
        id: 'panel_4',
        component: 'default',
        params: {
            title: 'Panel 4',
        },
        position: { referencePanel: 'panel_3', direction: 'right' },
    });

    dockview.addPanel({
        id: 'panel_5',
        component: 'default',
        params: {
            title: 'Panel 5',
        },
        position: { referencePanel: 'panel_4', direction: 'below' },
    });

    dockview.addPanel({
        id: 'panel_6',
        component: 'default',
        params: {
            title: 'Panel 6',
        },
        position: { referencePanel: 'panel_5', direction: 'right' },
    });

    return {
        dispose: () => {
            dockview.dispose();
            element.remove();
        },
    };
}
