import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TestInput } from "./TestInput";
import { TestSelect } from "./TestSelect";

function NormalPortal({ children }) {
  const redBox = document.getElementById("normal-portal");
  return ReactDOM.createPortal(children, redBox); // this is where the magic happens, check DOCs of react portal
}

export function NormalPortalDemo() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  function open() {
    setIsPortalOpen(true);
  }
  function close() {
    setIsPortalOpen(false);
  }

  return (
    <>
      <button onClick={open}>open normal portal</button>
      <button onClick={close}>close normal portal</button>
      <div>normal portal appears inside the red box↓:</div>
      <div id="normal-portal"></div>

      {isPortalOpen && (
        <NormalPortal>
          <TestInput />
          <TestSelect />
        </NormalPortal>
      )}
    </>
  );
}
