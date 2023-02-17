import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { StateContext, DispatchContext } from "../constants";
import { CustomInput } from "./CustomInput";

export default function FormComponent() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const handleOnChangeEvent = (event) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        input: event.target.name,
        name: event.target.value
      }
    });
  };
  return (
    <div className="App">
      <div className="formContainer">
        <input value={state.name} onChange={handleOnChangeEvent} />
        <label>Password:</label>
        <input name="password" type="password" onChange={handleOnChangeEvent} />
        <label>Confirm Password:</label>
        <input name="confirm-password" type="password" onChange={handleOnChangeEvent} />
      </div>
      <ComponentC />
    </div>
  );
}
