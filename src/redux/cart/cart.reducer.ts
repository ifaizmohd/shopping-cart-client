import IReduxAction from "../../types/redux.action";
import ICartState from "../../types/state-types/cart.state-types";
import { CART_TYPES } from "./cart.types";
import { addItemsToCart, removeItemsFromCart } from "./cart.utils";

const INITIAL_STATE: ICartState = {
  cartItems: [],
  isFetching: false,
  errorMessage: undefined,
  toggleCart: false,
};

export function cartReducer(state = INITIAL_STATE, action: IReduxAction) {
  switch (action.type) {
    case CART_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };

    case CART_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload),
      };

    case CART_TYPES.TOGGLE_CART:
      return {
        ...state,
        toggleCart: action.payload,
      };

    default:
      return state;
  }
}
