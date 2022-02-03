import { all, call, put, takeLatest } from "redux-saga/effects";
import { getBanners } from "../../api/banner.api";
import IAxiosResponse from "../../types/response.types";
import { fetchBannerFailure, fetchBannerSuccess } from "./banner.actions";
import { BANNER_TYPES } from "./banner.types";

function* fetchBannerAsync() {
  try {
    const response: IAxiosResponse = yield call(getBanners);
    yield put(fetchBannerSuccess(response.data));
  } catch (error) {
    yield put(fetchBannerFailure(error));
  }
}

function* fetchBannerStart() {
  yield takeLatest(BANNER_TYPES.FETCH_BANNER_START, fetchBannerAsync);
}

export function* bannerSaga() {
  yield all([call(fetchBannerStart)]);
}
