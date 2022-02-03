import axios from "axios";
import { ProductModel } from "../models/product.model";

export const getProducts = () =>
  axios.get<ProductModel>("http://localhost:5000/products");
