import React, { Component } from 'react'
import CommentInput from './CommentInput.js'
import ComponentList from "./CommentList"

class ComponentApp extends Component {
  constructor(props) {
    super(props)
    this.state= {
      commentList: []
    }
    this.handleSummit = this.handleSummit.bind(this)
  }
  handleSummit(comment) {
    let arr = this.state.commentList;
    arr.push(comment)
    this.setState({
      commentList: arr
    })
  }
  render () {
    const commentList = this.state.commentList
    return (
      <div class="App">
        <CommentInput onSubmit={this.handleSummit} />
        <ComponentList commentData={commentList} />
      </div>
    )
  }
}
export default ComponentApp