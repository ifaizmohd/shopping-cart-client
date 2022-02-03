import { FunctionComponent, useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./signup.styles.scss";

const Signup: FunctionComponent<any> = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="signup-container">
      <div className="right">
        <h1 className="bebas-font">Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="left">
        <form className="custom-form">
          <FormInput
            type="text"
            name="firstName"
            label="First Name"
            handleChange={(e: any) =>
              setData({ ...data, firstName: e.target.value })
            }
            value={data.firstName}
          />
          <FormInput
            type="text"
            name="lastName"
            label="Last Name"
            handleChange={(e: any) =>
              setData({ ...data, lastName: e.target.value })
            }
            value={data.lastName}
          />
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
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            handleChange={(e: any) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
            value={data.confirmPassword}
          />
          <CustomButton type="submit">Signup</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Signup;
