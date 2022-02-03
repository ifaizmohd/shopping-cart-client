import { all, call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "../../api/product.api";
import IAxiosResponse from "../../types/response.types";
import {
  fetchCollectionFailure,
  fetchCollectionSuccess,
} from "./product.actions";
import { SHOP_TYPES } from "./product.types";

function* fetchCollectionAsync() {
  try {
    const response: IAxiosResponse = yield call(getProducts);
    yield put(fetchCollectionSuccess(response.data));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

function* onFetchingCollection() {
  yield takeLatest(SHOP_TYPES.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* productSaga() {
  yield all([call(onFetchingCollection)]);
}
