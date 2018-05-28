import React, { Component } from "react"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
    this.emailChange = this.emailChange.bind(this)
  }

  emailChange(event) {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input type="email" name="email" onChange={this.emailChange} />
      </div>
    )
  }
}

export default Signup
