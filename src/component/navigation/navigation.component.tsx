import React, { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navigation.styles.scss";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import IStoreState from "../../types/store.types";
import { toggleCart } from "../../redux/cart/cart.action";
import { toggleCategories } from "../../redux/category/category.action";

const Navigation: FunctionComponent<any> = () => {
  const [toggle, setToggle] = useState(false);
  const { cart, category } = useSelector((store: IStoreState) => store);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  function toggleSidebar() {
    dispatch(toggleCategories(!toggle));
    setToggle(!toggle);
  }

  return (
    <section className="navigation-container bebas-font">
      <ArrowRightCircle
        className={`sidebar-toggle ${
          category.toggleCategories ? "left" : "right"
        }`}
        onClick={() => {
          toggleSidebar();
        }}
      />
      <header
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      ></header>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cart-icon-container">
        <ul className="nav-links-condensed">
          <li>
            <Link className="nav-link" to="/signin">
              Signin
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/signup">
              Register
            </Link>
          </li>
        </ul>
        <div className="cart-icon" onClick={() => dispatch(toggleCart(true))}>
          <CartIcon className="cart-icon-style" /> {cart.cartItems.length} items
        </div>
      </div>
    </section>
  );
};

export default Navigation;
