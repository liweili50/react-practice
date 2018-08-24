import React, { Component } from 'react'

class ComponentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      comment: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
  }
  handleUserChange(event) {
    this.setState({ user: event.target.value });
  }
  handleCommentChange(event) {
    this.setState({
      comment: event.target.value
    });
  }
  handleSubmitComment() {
    this.props.onSubmit(this.state)
  }
  render() {
    const user = this.state.user;
    const comment = this.state.comment;
    return (
      <div className="component-input">
        <div>
          <span>用户名：</span>
          <input onChange={this.handleUserChange} value={user} type="text" />
        </div>
        <div><span>评论内容：</span><textarea onChange={this.handleCommentChange} value={comment} /></div>
        <button onClick={this.handleSubmitComment}>发布</button>
      </div>
    )
  }
}
export default ComponentInput