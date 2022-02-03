import { ProductModel } from "../../models/product.model";
import BaseState from "./base.state-types";

export default interface IProductState extends BaseState {
  products: Array<ProductModel>;
  filter: string;
}
