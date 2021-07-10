import { useCouter } from "./useCouter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("UseCounter", () => {
  test("should return the defect value", () => {
    const { result } = renderHook(() => useCouter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("should return values", () => {
    const { result } = renderHook(() => useCouter(100));

    expect(result.current.counter).toBe(100);
  });

  test("should increment the counter +1", () => {
    const { result } = renderHook(() => useCouter(100));
    const { increment } = result.current;
    /**
     * act is a functon form testing hook library
     * that help us to run the multiple functions
     * that update our custom hook
     */
    act(() => increment());
    expect(result.current.counter).toBe(101);
  });

  test("should decrement the counter -1", () => {
    const { result } = renderHook(() => useCouter(100));
    const { decrement } = result.current;
    act(() => decrement());
    expect(result.current.counter).toBe(99);
  });
});
