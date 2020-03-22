import React from "react";

export class TestUncontrolledInput extends React.Component {
  input = React.createRef();
  handleSubmit = event => {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <h1>test uncontrolled input:</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
