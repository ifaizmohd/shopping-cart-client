import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { applyFilter } from "../../redux/product/product.actions";
import IBannerProps from "../../types/propTypes/banner.propTypes";
import CustomButton from "../custom-button/custom-button.component";
import "./banner.styles.scss";

const Banner: FunctionComponent<IBannerProps> = ({ category }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  return (
    <section className="banner">
      <div className="banner-image">
        <img
          className="image"
          src={require(`../../assets${category.imageUrl}`)}
          alt={category.key}
        />
      </div>
      <article className="categories-container">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <CustomButton
          type="button"
          onClick={() => {
            navigate("/products");
            dispatch(applyFilter(category.id));
          }}
        >{`Explore ${category.key}`}</CustomButton>
      </article>
    </section>
  );
};

export default Banner;
