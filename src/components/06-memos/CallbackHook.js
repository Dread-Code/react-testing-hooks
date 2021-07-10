import React, { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //     setCounter( counter + 1 );
  // }

  /**
   * Usamos useCallback cuando la funcion que
   * estamos almacenando en espacio de memorio del
   * componete padre y la estamos ejecutando en el
   * hijo, fuerza un renderizado innecesario en
   * el componente hijo pdt: tambien hay que envolver el
   * hijo en React.memo
   */
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {
    // ???
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
