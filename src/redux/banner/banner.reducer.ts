import IReduxAction from "../../types/redux.action";
import { BANNER_TYPES } from "./banner.types";

const INITIAL_STATE: any = {
  banners: [],
  isFetching: false,
  errorMessage: undefined,
};

export function bannerReducer(state = INITIAL_STATE, action: IReduxAction) {
  switch (action.type) {
    case BANNER_TYPES.FETCH_BANNER_START:
      return {
        ...state,
        isFetching: true,
      };

    case BANNER_TYPES.FETCH_BANNER_SUCCESS:
      return {
        ...state,
        banners: action.payload,
        isFetching: false,
      };

    case BANNER_TYPES.FETCH_BANNER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
}
