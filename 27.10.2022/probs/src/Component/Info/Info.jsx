import React, { Component } from 'react'

class Info extends Component {
  render() {
    return (
      <div>
       <h3>{this.props.title}</h3>
        <p>{this.props.info}</p>
        <p>{this.props.experience}</p> 
      </div>
    )
  }
}
export default Info