import { shallow } from "enzyme";
import React from "react";
import SignIn from "./sign-in.component";

describe("Signin component testing", () => {
  it("Shallow snapshot testing of Signin component", () => {
    expect(shallow(<SignIn />)).toMatchSnapshot();
  });
});
