import React, { FunctionComponent } from "react";
import "./spinner.styles.scss";

const Spinner: FunctionComponent<any> = () => (
  <div className="overlay">
    <div className="spinner"></div>
  </div>
);

export default React.memo(Spinner);
