import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductModel } from "../../models/product.model";
import IStoreState from "../../types/store.types";

import { DashSquareFill, PlusSquareFill } from "react-bootstrap-icons";
import "./cart.styles.scss";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cart.action";

const CartComponent: FunctionComponent<any> = () => {
  const { cart } = useSelector((store: IStoreState) => store);
  let dispatch = useDispatch();

  return (
    <section className="cart-body">
      <div className="scrollable">
        {cart.cartItems.map((cartItem: ProductModel) => (
          <div key={cartItem.id} className="cart-items">
            <div className="cart-image-container">
              <img
                className="cart-item-image"
                src={require(`../../assets${cartItem.imageURL}`)}
                alt={cartItem.name}
              />
            </div>
            <div className="cart-item-details">
              <h3>{cartItem.name}</h3>
              <div className="group-details">
                <DashSquareFill
                  fill="#d00256"
                  onClick={() => dispatch(removeItemFromCart(cartItem))}
                  style={{ cursor: "pointer" }}
                />
                <span>{cartItem.quantity}</span>
                <PlusSquareFill
                  fill="#d00256"
                  onClick={() => dispatch(addItemToCart(cartItem))}
                  style={{ cursor: "pointer" }}
                />
                <span>X Rs. {cartItem.price}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="lowest-price">
          <img
            src={require("../../assets/lowest-price.png")}
            alt="lowest-price"
          />
          <p>You wont find it cheaper anywhere</p>
        </div>
      </div>
    </section>
  );
};

export default CartComponent;
