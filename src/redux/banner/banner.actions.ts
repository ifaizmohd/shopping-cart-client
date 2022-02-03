import { BannerModel } from "../../models/banner.model";
import IReduxAction from "../../types/redux.action";
import { BANNER_TYPES } from "./banner.types";

export function fetchBannerStart(): IReduxAction {
  return { type: BANNER_TYPES.FETCH_BANNER_START };
}

export function fetchBannerSuccess(banner: BannerModel): IReduxAction {
  return { type: BANNER_TYPES.FETCH_BANNER_SUCCESS, payload: banner };
}

export function fetchBannerFailure(err: any): IReduxAction {
  return { type: BANNER_TYPES.FETCH_BANNER_FAILURE, payload: err };
}
