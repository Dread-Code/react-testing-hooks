import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "./HookApp";
import "@testing-library/jest-dom";

describe("HookApp", () => {
  test("should match snapshoot", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
