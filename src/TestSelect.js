import React, { useState } from "react";

export function TestSelect() {
  const [value, setValue] = useState("lime");
  function handleChange(event) {
    alert("You selected " + event.target.value);
    setValue(event.target.value);
  }
  return (
    <>
      <h1>test input:</h1>
      <form>
        <label>
          The onChange event doesn't fire in external window:
          <select value={value} onChange={handleChange}>
            <option value="aaa">aaa</option>
            <option value="bbb">bbb</option>
            <option value="ccc">ccc</option>
          </select>
        </label>
      </form>
    </>
  );
}
