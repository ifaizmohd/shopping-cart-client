import { shallow } from "enzyme";
import React from "react";
import Spinner from "./spinner.component";

describe("Spinner component testing", () => {
  it("Shallow snapshot testing of Spinner component", () => {
    expect(shallow(<Spinner />)).toMatchSnapshot();
  });
});
