import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategories } from "../../api/categories.api";
import IAxiosResponse from "../../types/response.types";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./category.action";
import { CATEGORY_TYPES } from "./category.types";

function* fetchCategoriesAsync() {
  try {
    const response: IAxiosResponse = yield call(getCategories);
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

function* onFetchingCategories() {
  yield takeLatest(CATEGORY_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categorySaga() {
  yield all([call(onFetchingCategories)]);
}
