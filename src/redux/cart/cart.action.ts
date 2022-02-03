import { ProductModel } from "../../models/product.model";
import IReduxAction from "../../types/redux.action";
import { CART_TYPES } from "./cart.types";

export function addItemToCart(cartItem: ProductModel): IReduxAction {
  return { type: CART_TYPES.ADD_ITEM, payload: cartItem };
}

export function removeItemFromCart(cartItem: ProductModel): IReduxAction {
  return { type: CART_TYPES.REMOVE_ITEM, payload: cartItem };
}

export function toggleCart(toggle: boolean): IReduxAction {
  return { type: CART_TYPES.TOGGLE_CART, payload: toggle };
}
