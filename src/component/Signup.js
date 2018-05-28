import React, { Component } from "react"

class Signup extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>{this.props.email}</h1>
        <input type="email" name="email" />
      </div>
    )
  }
}

export default Signup
