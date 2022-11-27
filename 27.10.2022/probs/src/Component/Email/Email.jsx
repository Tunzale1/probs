import React, { Component } from 'react'

 class Email extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.email}</p>
      </div>
    )
  }
}
export default Email