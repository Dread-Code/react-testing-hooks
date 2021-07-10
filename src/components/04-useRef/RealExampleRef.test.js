import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "./RealExampleRef";
import "@testing-library/jest-dom";

describe("RealExampleRef", () => {
  test("match to snapshoot", () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should match show the component", () => {
    const wrapper = shallow(<RealExampleRef />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
