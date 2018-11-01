// src/components/ControlledInput.js
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}


  render() {
    return (

    <input type="text" name="firstName" value={this.state.firstName} />
    <input type="text" name="lastName" value={this.state.lastName} />

    );
  }
}

export default ControlledInput;
