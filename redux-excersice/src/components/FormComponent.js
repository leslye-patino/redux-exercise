import React from "react";

export default function FormComponent() {

  const handleSubmit = event => {}

  return (

    <div className="wrapper">

    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>Name</p>
          <input name="name" />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}
