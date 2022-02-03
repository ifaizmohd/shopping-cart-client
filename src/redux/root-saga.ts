import { all, call } from "redux-saga/effects";
import { bannerSaga } from "./banner/banner.saga";
import { categorySaga } from "./category/category.saga";
import { productSaga } from "./product/product.saga";

export default function* rootSaga() {
  yield all([call(productSaga), call(bannerSaga), call(categorySaga)]);
}
