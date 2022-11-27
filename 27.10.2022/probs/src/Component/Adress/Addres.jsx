import React, { Component } from 'react'

 class Addres extends Component {
  render() {
    return (
      <div>
<h3>{this.props.title}</h3>
        <p>{this.props.firstline}</p>
        <p>{this.props.secondline}</p>

      </div>
    )
  }
}
export default Addres