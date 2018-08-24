import React, { Component } from 'react'

class ComponentItem extends Component {
  render () {
    console.log(this.props.children)
    return (
        <li>
          <div>{this.props.children}</div>
          <i>{this.props.info.user}:</i>
          <span>{this.props.info.comment}</span>
        </li>
    )
  }
}
export default ComponentItem