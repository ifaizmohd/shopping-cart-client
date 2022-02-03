import { FunctionComponent, useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

const SignIn: FunctionComponent<any> = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="signup-container">
      <div className="right">
        <h1 className="bebas-font">Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations.</p>
      </div>
      <div className="left">
        <form className="custom-form">
          <FormInput
            type="email"
            name="email"
            label="Email"
            handleChange={(e: any) =>
              setData({ ...data, email: e.target.value })
            }
            value={data.email}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            handleChange={(e: any) =>
              setData({ ...data, password: e.target.value })
            }
            value={data.password}
          />
          <CustomButton type="submit">Login</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
