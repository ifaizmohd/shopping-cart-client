import { shallow } from "enzyme";
import React from "react";
import Signup from "./signup.component";

describe("Signup component testing", () => {
  it("Shallow snapshot testing of signup component", () => {
    expect(shallow(<Signup />)).toMatchSnapshot();
  });
});
