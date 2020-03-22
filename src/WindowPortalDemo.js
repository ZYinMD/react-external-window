import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { TestInput } from "./TestInput";
import { TestSelect } from "./TestSelect";
import { TestUncontrolledInput } from "./TestUncontrolledInput";

function WindowPortal({ children, close }) {
  const containerNode = document.createElement("div");
  useEffect(() => {
    const externalWindow = window.open("", "myWindow2", "foo");
    externalWindow.document.body.appendChild(containerNode);
    // if the window is closed by the OS, close the portal
    externalWindow.addEventListener("beforeunload", close);

    return () => {
      externalWindow.close();
      close();
    };
  });
  return ReactDOM.createPortal(children, containerNode);
}

export function WindowPortalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  function open() {
    // if it's already open, probably in the background, bring it to the front:
    if (isOpen) {
      const externalWindow = window.open("", "myWindow2"); // if "myWindow2" already exists, will find it, it not, will create it
      externalWindow.focus();
    } else setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <p>external portal will appears in a new window:</p>
      <button onClick={open}>open portal in external window</button>
      <button onClick={close}>close portal in external window</button>
      {isOpen && (
        <WindowPortal close={close}>
          <TestInput />
          <TestSelect />
          <TestUncontrolledInput />
        </WindowPortal>
      )}
    </>
  );
}
