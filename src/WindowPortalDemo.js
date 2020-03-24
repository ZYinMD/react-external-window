import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TestInput } from "./TestInput";
import { TestSelect } from "./TestSelect";

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

export class WindowPortalDemo extends Component {
  state = {
    isOpen: false
  };
  open = () => {
    // if it's already open, probably in the background, bring it to the front:
    if (this.state.isOpen) {
      const externalWindow = window.open("", "myWindow2"); // if "myWindow2" already exists, will find it, it not, will create it
      externalWindow.focus();
    } else this.setState({ isOpen: true });
  };
  close = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <>
        <p>external portal will appears in a new window:</p>
        <button onClick={this.open}>open portal in external window</button>
        <button onClick={this.close}>close portal in external window</button>
        {this.state.isOpen && (
          <WindowPortal close={this.close}>
            <TestInput />
            <TestSelect />
          </WindowPortal>
        )}
      </>
    );
  }
}
