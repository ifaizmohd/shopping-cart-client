import IReduxAction from "../../types/redux.action";
import IProductState from "../../types/state-types/product-state.types";
import { SHOP_TYPES } from "./product.types";

const INITIAL_STATE: IProductState = {
  products: [],
  isFetching: false,
  errorMessage: undefined,
  filter: "5b6899953d1a866534f516e2",
};

export function productReducer(state = INITIAL_STATE, action: IReduxAction) {
  switch (action.type) {
    case SHOP_TYPES.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case SHOP_TYPES.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };

    case SHOP_TYPES.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };

    case SHOP_TYPES.APPLY_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
