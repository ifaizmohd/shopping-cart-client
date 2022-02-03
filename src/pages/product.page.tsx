import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartMobile from "../component/cart/cart-mobile.component";
import Center from "../component/center/center.component";
import Sidebar from "../component/sidebar/sidebar.component";
import { applyFilter } from "../redux/product/product.actions";
import IStoreState from "../types/store.types";

const ProductPage: FunctionComponent<any> = () => {
  const { product, cart } = useSelector((store: IStoreState) => store);
  const dispatch = useDispatch();

  function setFilterValue(filterValue: string) {
    dispatch(applyFilter(filterValue));
  }

  return (
    <>
      <CartMobile show={cart.toggleCart} />
      <Sidebar
        setFilterValue={(filterValue: string) => setFilterValue(filterValue)}
      />
      <Center filterValue={product.filter} />
    </>
  );
};

export default ProductPage;
