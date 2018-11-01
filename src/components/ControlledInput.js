import React from 'react'

export default class ControlledInput extends React.Component {

  state = {
    firstName: '',
    lastName: ''
  }

  updateFName = (event) => {
    this.setState({firstName: event.target.value})
  }

  updateLName = (event) => {
    this.setState({lastName: event.target.value})
  }

  render() {
    return (
      <form action="/login">
      <input type="text" name="firstName"
      onChange={(event) => this.updateFName(event)} value={this.state.firstName}/>
      <input type="text" name="lastName"
      onChange={(event) => this.updateLName(event)} value={this.state.lastName}/>
      </form>
      )
  }
}
