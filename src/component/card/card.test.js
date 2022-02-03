import { shallow } from "enzyme";
import React from "react";
import Card from "./card.component";

describe("Card component testing", () => {
  it("Shallow snapshot testing of card component", () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
