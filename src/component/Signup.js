import React, { Component } from "react"

class Signup extends Component {
  constructor(props) {
    super(props)
    let remplissage
    if (typeof this.props.email !== undefined) remplissage = this.props.email
    else remplissage = "monMailAMoi@serveur.fr"
    this.state = {
      email: remplissage
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
        <input
          type="email"
          name="email"
          placeholder={this.state.email}
          onChange={this.emailChange}
        />
      </div>
    )
  }
}

export default Signup
