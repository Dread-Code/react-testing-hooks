import React from "react";
import { shallow } from "enzyme/build";
import { MultipleCustomHooks } from "./MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import "@testing-library/jest-dom";
import { useCouter } from "../../hooks/useCouter";
/**
 * Jest.mock is a function that break up
 * the functions that change the state
 * of our component, yo have to rememeber the
 * unit testing should be of our actual
 * component and divide the external
 * function from it
 */

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCouter");

describe("MultipleCustomHooks", () => {
  /**
   * With this we return a "fake" data from
   * the function that we mocked
   */
  useCouter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });

  test("should show corectly", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should match the information", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Lucas",
          quote: "Hola Putos",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the information correctly", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Lucas",
          quote: "Hola Putos",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Putos");
    expect(wrapper.find("footer").text().trim()).toBe("Lucas");
  });
});
