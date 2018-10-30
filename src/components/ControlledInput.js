// src/components/ControlledInput.js
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    myValue: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.myValue}
          onChange={this.handleChange}
          name="myValue"
        />
      </form>
    );
  }
}

export default ControlledInput;