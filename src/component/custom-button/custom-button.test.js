import { shallow } from "enzyme";
import React from "react";
import CustomButton from "./custom-button.component";

describe("Custom button component testing", () => {
  it("Shallow snapshot testing of custom button component", () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
  });
});
