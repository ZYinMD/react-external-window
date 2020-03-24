import React, { Component } from "react";

export class TestInput extends Component {
  state = {
    value: ""
  };
  handleChange = event => {
    console.log("onChange!!"); // this doesn't fire in external window
    const newValue = event.target.value;
    this.setState({ value: newValue });
  };
  handleSubmit = event => {
    console.log("current value of input is: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <h1>test input:</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            The onChange event doesn't fire in external window:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
export default TestInput;
