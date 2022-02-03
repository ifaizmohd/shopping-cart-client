import IReduxAction from "../../types/redux.action";
import { SHOP_TYPES } from "./product.types";

export function fetchCollectionStart(): IReduxAction {
  return { type: SHOP_TYPES.FETCH_COLLECTION_START };
}

export function fetchCollectionSuccess(payload: any): IReduxAction {
  return { type: SHOP_TYPES.FETCH_COLLECTION_SUCCESS, payload: payload };
}

export function fetchCollectionFailure(err: any): IReduxAction {
  return { type: SHOP_TYPES.FETCH_COLLECTION_FAILURE, payload: err };
}

export function applyFilter(filter: string): IReduxAction {
  return { type: SHOP_TYPES.APPLY_FILTER, payload: filter };
}
