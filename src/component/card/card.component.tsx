import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";
import ICardProps from "../../types/propTypes/card.propTypes";
import CustomButton from "../custom-button/custom-button.component";
import "./card.styles.scss";

const Card: FunctionComponent<ICardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <div className="card-content">
        <img
          className="image"
          src={require(`../../assets${product.imageURL}`)}
          alt={`${product.name}`}
        />
        <div className="card-details">
          <div className="description">{product.description}</div>
          <CustomButton
            type="button"
            onClick={() => dispatch(addItemToCart(product))}
          >
            Buy Now @ MRP RS.{product.price}
          </CustomButton>
        </div>
      </div>
      <div className="tablet">
        <CustomButton
          type="button"
          onClick={() => dispatch(addItemToCart(product))}
        >
          Buy Now @ MRP RS.{product.price}
        </CustomButton>
      </div>
    </div>
  );
};

export default Card;
