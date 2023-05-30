import {Products} from "../types/Products"
import {Navigation} from "../types/navigation"


export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: [];
  payload: '';
};

export enum ProductActions {
  "ADD" = "ADD",
  "GET" = "GET"
}

export enum navigateActions {
  "NAVIGATE" = "NAVIGATE",
}

export interface addProductAction {
  action: ProductActions.ADD;
  payload: Pick<AppState, "payload">;
}

export interface getProductAction {
  action: ProductActions.GET;
  payload: Pick<AppState, "payload">;
}

export interface navigateAction {
  action: navigateActions.NAVIGATE;
  payload: Pick<AppState, "payload">;
}


export type Actions = addProductAction  |  getProductAction  |  navigateAction;
