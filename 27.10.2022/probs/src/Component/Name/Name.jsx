import React, { Component } from 'react'

class Name extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.name}</p>
        <p>{this.props.lastname}</p>
        <p>{this.props.ata}</p>
        </div>
    )
  }
}
export default Name