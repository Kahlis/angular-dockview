import {IContentRenderer, Parameters} from "dockview-core";
import {ComponentType} from "@angular/cdk/portal";

export interface IContentResizable {
  resize: (width:number, height: number) => void,
}

export interface IDockViewTabItem
{
  id: string,
  componentKey: string,
  component: IContentRenderer & IContentResizable,
  type: ComponentType<any>,
  params: Parameters
}

export interface IDockIndex
{
  [id: string] : IDockViewTabItem
}
