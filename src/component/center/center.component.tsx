import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductModel } from "../../models/product.model";
import { fetchCollectionStart } from "../../redux/product/product.actions";
import ICenterProps from "../../types/propTypes/center.propTypes";
import IStoreState from "../../types/store.types";
import Card from "../card/card.component";
import "./center.styles.scss";

const Center: FunctionComponent<ICenterProps> = ({ filterValue }) => {
  const { product } = useSelector((store: IStoreState) => store);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <div className={`center-container`}>
      {product.products
        .filter((item: ProductModel) => item.category === filterValue)
        .map((prod: ProductModel) => (
          <Card key={prod.id} product={prod} />
        ))}
    </div>
  );
};

export default React.memo(Center);
