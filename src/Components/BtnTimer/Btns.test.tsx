import React from "react";
import { shallow } from "enzyme";
import Btn from "./Btns";

describe("Btn", () => {
  let container:any;

  beforeEach(() => (container = shallow(<Btn />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(4)
  })
})