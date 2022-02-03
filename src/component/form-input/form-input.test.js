import { shallow } from "enzyme";
import React from "react";
import FormInput from "./form-input.component";

describe("Form input component testing", () => {
  it("Shallow snapshot testing of form input component", () => {
    expect(shallow(<FormInput />)).toMatchSnapshot();
  });
});
