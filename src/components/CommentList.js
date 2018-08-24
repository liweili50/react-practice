import React, { Component } from 'react'
import ComponentItem from './CommentItem'

class ComponentList extends Component {
  render() {
    return (
      <ul>
       {this.props.commentData.map(function (comment, i) {
           return <ComponentItem key={i} info= {comment}>
           <div>
             <span>2222</span>
             <i>88</i>
           </div>
           </ComponentItem>
       })}
      </ul>
    )
  }
}
export default ComponentList