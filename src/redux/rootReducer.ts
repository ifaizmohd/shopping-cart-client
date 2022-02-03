import { combineReducers } from "redux";
import { bannerReducer } from "./banner/banner.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { categoryReducer } from "./category/category.reducer";
import { productReducer } from "./product/product.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  banner: bannerReducer,
  category: categoryReducer,
});

export default rootReducer;
