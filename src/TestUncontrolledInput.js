import React, { useRef } from "react";

export function TestUncontrolledInput() {
  const inputNode = useRef(null);

  function handleSubmit(event) {
    console.log("inputNode.current.value:\n\t", inputNode.current.value);
    event.preventDefault();
  }

  return (
    <>
      <h1>test uncontrolled input:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          This should have no issues:
          <input type="text" ref={inputNode} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
