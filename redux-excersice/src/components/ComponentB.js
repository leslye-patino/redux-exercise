import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { StateContext, DispatchContext } from "../constants";

export default function ComponentB() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const handleOnChangeEvent = (event) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: event.target.value
      }
    });
  };
  return (
    <div className="App">
      <input value={state.name} onChange={handleOnChangeEvent} />
      <ComponentC />
    </div>
  );
}
