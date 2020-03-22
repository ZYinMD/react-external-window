import React, { useRef } from "react";

export function TestUncontrolledInput() {
  const input = useRef(null);

  function handleSubmit(event) {
    console.log("input.current.value:\n\t", input.current.value);
    event.preventDefault();
  }

  return (
    <>
      <h1>test uncontrolled input:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
