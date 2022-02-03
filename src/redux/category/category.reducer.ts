import IReduxAction from "../../types/redux.action";
import ICategoryState from "../../types/state-types/category.state-types";
import { CATEGORY_TYPES } from "./category.types";

const INITIAL_STATE: ICategoryState = {
  categories: [],
  toggleCategories: false,
  isFetching: false,
  errorMessage: undefined,
};

export function categoryReducer(state = INITIAL_STATE, action: IReduxAction) {
  switch (action.type) {
    case CATEGORY_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isFetching: true,
      };

    case CATEGORY_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetching: false,
      };

    case CATEGORY_TYPES.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case CATEGORY_TYPES.TOGGLE_CATEGORIES:
      return {
        ...state,
        toggleCategories: action.payload,
      };
    default:
      return state;
  }
}
