import { FunctionComponent } from "react";
import "./error.styles.scss";

const ErrorComponent: FunctionComponent<any> = () => (
  <section className="image-overlay">
    <div className="image-container"></div>
    <h2 className="error-text">This Page is broken</h2>
  </section>
);

export default ErrorComponent;
