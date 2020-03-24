import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { TestInput } from "./TestInput";
import { TestSelect } from "./TestSelect";
import { TestUncontrolledInput } from "./TestUncontrolledInput";
import { TestUncontrolledSelect } from "./TestUncontrolledSelect";

class WindowPortal extends Component {
  containerNode = document.createElement("div");

  componentDidMount() {
    this.externalWindow = window.open("", "myWindow2", "foo");
    this.externalWindow.document.body.appendChild(this.containerNode);
    // if the window is closed by the OS, close the portal
    this.externalWindow.addEventListener("beforeunload", this.props.close);
  }

  componentWillUnmount() {
    this.props.close();
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.containerNode);
  }
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
          <TestUncontrolledSelect />
        </WindowPortal>
      )}
    </>
  );
}
