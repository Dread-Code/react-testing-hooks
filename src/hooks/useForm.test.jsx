import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "./useForm";

describe("useForm", () => {
  const initialForm = {
    name: "Lucas",
    email: "lucas@gmail.com",
  };

  test("should return the defect values ", () => {
    const { result } = renderHook(() => useForm());
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual({});
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should return the initial state in values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current[0]).toEqual(initialForm);
  });

  test("change de value name of the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() =>
      handleInputChange({
        target: {
          name: "name",
          value: "Frijolito",
        },
      })
    );
    const [values] = result.current;

    expect(values).toEqual({ ...initialForm, name: "Frijolito" });
  });

  test("reset the form", () => {
    const initialForm = {
      name: "",
      email: "",
    };
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() =>
      handleInputChange({
        target: {
          name: "name",
          value: "Frijolito",
        },
      })
    );
    act(() =>
      handleInputChange({
        target: {
          name: "email",
          value: "frijolito@muchalucha.com",
        },
      })
    );
    act(() => reset());
    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
