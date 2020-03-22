import React, { useRef } from "react";

export function TestUncontrolledSelect() {
  const selectNode = useRef(null);

  function handleSubmit(event) {
    console.log("selectNode.current.value:\n\t", selectNode.current.value);
    event.preventDefault();
  }

  return (
    <>
      <h1>test uncontrolled select:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          This should have no issues:
          <select ref={selectNode} defaultValue={"aaa"}>
            <option value="aaa">aaa</option>
            <option value="bbb">bbb</option>
            <option value="ccc">ccc</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
