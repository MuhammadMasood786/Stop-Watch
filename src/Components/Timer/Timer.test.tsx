import React from "react";
import { shallow } from "enzyme";
import Timer from "./Timer";

describe("Timer", () => {
  let container:any;

  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    expect(container.find("span").length).toEqual(3)
  })
})