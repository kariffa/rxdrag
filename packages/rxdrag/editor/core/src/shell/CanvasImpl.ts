import { IShellPane, ID, IDesignerEngine, IDriver, IDriverFactory, RXID_ATTR_NAME, IRect } from "../interfaces";
import { extractElements } from "./extractElements";
import { getMergedRect } from "./getMergedRect";

export class CanvasImpl implements IShellPane {
  private drivers: IDriver[] = []

  constructor(
    public id: ID,
    engine: IDesignerEngine,
    //根节点Id
    private rootNodeId: string,
    private driverFactories: IDriverFactory[]
  ) {
    for (const driverFactory of this.driverFactories) {
      this.drivers.push(driverFactory(engine.getShell(), document))
    }
  }

  getRootElement(): HTMLElement {
    return document.body;
  }

  getContainerRect(): IRect | null {
    const containerElement = document.querySelector(`[${RXID_ATTR_NAME}="${this.rootNodeId}"]`)
    const rect = containerElement?.getBoundingClientRect()
    if (!rect) {
      return null
    }
    return { width: rect.width, height: rect.height, x: 0, y: 0, }
  }

  appendChild(child: HTMLElement): void {
    document.body?.append(child)
  }
  contains(child: HTMLElement): boolean {
    return document.body?.contains(child) || false
  }
  removeChild(child: HTMLElement): void {
    document.body?.removeChild(child)
  }
  getElements(id: string): HTMLElement[] | null {
    const nodeLists = document.body?.querySelectorAll(`[${RXID_ATTR_NAME}="${id}"]`)
    return extractElements(nodeLists)
  }

  getNodeRect(nodeId: string): IRect | null {
    const rects = this.getElements(nodeId)?.map(element => element.getBoundingClientRect());
    if (!rects?.length) {
      return null
    }
    return getMergedRect(rects);
  }

  destroy(): void {
    for (const driver of this.drivers) {
      driver.teardown()
    }
    this.drivers = []
  }
}



