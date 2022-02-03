import { ProductModel } from "../../models/product.model";

export const addItemsToCart = (
  cartItems: Array<ProductModel>,
  cartItemToAdd: ProductModel
) => {
  const existingItem = cartItems.find(
    (cartItem: ProductModel) => cartItem.id === cartItemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem: ProductModel) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemsFromCart = (
  cartItems: Array<ProductModel>,
  cartItemToRemove: ProductModel
) => {
  const existingItem = cartItems.find(
    (cartItem: ProductModel) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem?.quantity === 1) {
    return cartItems.filter(
      (cartItem: ProductModel) => cartItem.id !== cartItemToRemove.id
    );
  }

  return cartItems.map((cartItem: ProductModel) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
