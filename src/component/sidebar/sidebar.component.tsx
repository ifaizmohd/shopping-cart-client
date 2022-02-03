import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CategoryModel } from "../../models/category.model";
import { fetchCategoriesStart } from "../../redux/category/category.action";
import ISidebarProps from "../../types/propTypes/sidebar.porpTypes";
import IStoreState from "../../types/store.types";
import CustomButton from "../custom-button/custom-button.component";
import "./sidebar.styles.scss";

const Sidebar: FunctionComponent<ISidebarProps> = ({ setFilterValue }) => {
  const { category } = useSelector((store: IStoreState) => store);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <aside className={`sidebar ${category.toggleCategories ? "show" : ""}`}>
      {category.categories
        .filter((item: CategoryModel) => item.order > 0)
        .map((cat: CategoryModel) => (
          <section
            key={cat.id}
            className="sidebar-links"
            onClick={() => {
              setFilterValue(cat.id);
            }}
          >
            {cat.name}
          </section>
        ))}
      <section className="user-btns">
        <CustomButton type="button" onClick={() => navigate("/signin")}>
          Signin
        </CustomButton>
        <CustomButton
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Register
        </CustomButton>
      </section>
    </aside>
  );
};

export default Sidebar;
