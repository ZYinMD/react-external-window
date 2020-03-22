import React, { useState } from "react";

export function TestSelect() {
  const [value, setValue] = useState("lime");
  function handleChange(event) {
    const newValue = event.target.value;
    alert("You selected " + newValue);
    setValue(newValue);
  }
  return (
    <>
      <h1>test select:</h1>
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
