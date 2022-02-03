import { FunctionComponent } from "react";
import { ICustomButtonProps } from "../../types/propTypes/custom-button-propTypes";
import "./custom-button.styles.scss";

const CustomButton: FunctionComponent<ICustomButtonProps> = ({
  children,
  mobile,
  checkout,
  addRemove,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button bebas-font ${
        mobile ? "mobile-view" : "desktop-view"
      } ${checkout ? "checkout" : ""} ${addRemove ? "add-remove" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
