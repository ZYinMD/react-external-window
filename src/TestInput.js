import React, { useState } from "react";

export function TestInput() {
  const [value, setValue] = useState("");
  function handleChange(event) {
    console.log("event:\n\t", event); // this doesn't fire in external window
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    alert("current value of input is: " + value);
    event.preventDefault();
  }
  return (
    <>
      <h1>test input:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          The onChange event doesn't fire in external window:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
