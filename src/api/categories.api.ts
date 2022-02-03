import axios from "axios";
import { CategoryModel } from "../models/category.model";

export const getCategories = () =>
  axios.get<CategoryModel>("http://localhost:5000/categories");
