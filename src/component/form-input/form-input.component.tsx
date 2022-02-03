import { FunctionComponent } from "react";
import IFormInputProps from "../../types/propTypes/form-input.propTypes";
import "./form-input.styles.scss";

const FormInput: FunctionComponent<IFormInputProps> = ({
  label,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
