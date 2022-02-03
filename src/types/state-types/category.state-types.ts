import { CategoryModel } from "../../models/category.model";
import BaseState from "./base.state-types";

export default interface ICategoryState extends BaseState {
  categories: Array<CategoryModel>;
  toggleCategories: boolean;
}
