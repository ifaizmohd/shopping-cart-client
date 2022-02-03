import { ProductModel } from "../../models/product.model";
import BaseState from "./base.state-types";

export default interface ICartState extends BaseState {
  cartItems: Array<ProductModel>;
  toggleCart: boolean;
}
