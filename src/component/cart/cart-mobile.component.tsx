import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductModel } from "../../models/product.model";
import IStoreState from "../../types/store.types";
import CustomButton from "../custom-button/custom-button.component";
import CartComponent from "./cart.component";
import { ChevronRight } from "react-bootstrap-icons";
import { toggleCart } from "../../redux/cart/cart.action";
import "../custom-modal/custom-modal.styles.scss";
import "./cart.styles.scss";

const CartMobile: FunctionComponent<any> = ({ show }) => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((store: IStoreState) => store);
  let dispatch = useDispatch();

  useEffect(() => {
    let totalAmount = cart.cartItems.reduce(
      (a: any, i: ProductModel) => a + i.quantity * i.price,
      0
    );
    setTotal(totalAmount);
  }, [cart]);

  return (
    <article className={`modal-content ${show ? "show" : "hide"}`}>
      <header className="modal-header">
        <h2>My Cart</h2>
        <span className="close" onClick={() => dispatch(toggleCart(false))}>
          &times;
        </span>
      </header>
      <div className="modal-body">
        {cart.cartItems.length && (
          <>
            <CartComponent />
          </>
        )}
      </div>
      <footer>
        <p>Promo code can be applied on payment page.</p>
        <CustomButton type="button" checkout>
          <span>Proceed to Checkout</span>
          <span>
            Rs.{total}
            <span>
              <ChevronRight size={10} />
            </span>
          </span>
        </CustomButton>
      </footer>
    </article>
  );
};

export default CartMobile;
