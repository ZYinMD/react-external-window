import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TestInput } from "./TestInput";
import { TestSelect } from "./TestSelect";

function NormalPortal({ children }) {
  const redBox = document.getElementById("normal-portal");
  return ReactDOM.createPortal(children, redBox); // this is where the magic happens, check DOCs of react portal
}

export class NormalPortalDemo extends Component {
  state = {
    isPortalOpen: false
  };
  open = () => {
    this.setState({ isPortalOpen: true });
  };
  close = () => {
    this.setState({ isPortalOpen: false });
  };

  render() {
    return (
      <div>
        <p>normal portal appears inside the red box↓:</p>
        <button onClick={this.open}>open normal portal</button>
        <button onClick={this.close}>close normal portal</button>
        <div id="normal-portal"></div>

        {this.state.isPortalOpen && (
          <NormalPortal>
            <TestInput />
            <TestSelect />
          </NormalPortal>
        )}
      </div>
    );
  }
}
