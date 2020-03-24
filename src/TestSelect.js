import React, { Component } from "react";

export class TestSelect extends Component {
  state = {
    value: ""
  };
  handleChange = event => {
    const newValue = event.target.value;
    console.log("You selected " + newValue);
    this.setState({
      value: newValue
    });
  };

  render() {
    return (
      <>
        <h1>test select:</h1>
        <form>
          <label>
            The onChange event doesn't fire in external window:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="aaa">aaa</option>
              <option value="bbb">bbb</option>
              <option value="ccc">ccc</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}
