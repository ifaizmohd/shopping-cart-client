import { CategoryModel } from "../../models/category.model";
import IReduxAction from "../../types/redux.action";
import { CATEGORY_TYPES } from "./category.types";

export function fetchCategoriesStart(): IReduxAction {
  return { type: CATEGORY_TYPES.FETCH_CATEGORIES_START };
}

export function fetchCategoriesSuccess(
  categories: CategoryModel[]
): IReduxAction {
  return { type: CATEGORY_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categories };
}

export function fetchCategoriesFailure(err: any): IReduxAction {
  return { type: CATEGORY_TYPES.FETCH_CATEGORIES_FAILURE, payload: err };
}

export function toggleCategories(toggle: boolean): IReduxAction {
  return { type: CATEGORY_TYPES.TOGGLE_CATEGORIES, payload: toggle };
}
