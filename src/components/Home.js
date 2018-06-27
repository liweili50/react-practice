import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      age: props.initalAge,
      linkName: 'I am a new Name'
    }
    this.onMarkOlder = this.onMarkOlder.bind(this);
    this.handleGreet = this.handleGreet.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this)
  }
  onMarkOlder() {
    this.setState({
      age: this.state.age+3
    })
  }
  handleGreet() {
    this.props.greet(this.state.age)
  }
  handleChangeName() {
    this.props.changeName(this.state.linkName)
  }
  render() {
    console.log(this.props)
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offet-11">
              <div>your name is {this.props.name}，age{this.state.age}</div>
              <button onClick={this.onMarkOlder} className="btn btn-primary">Make me older</button>
              <hr />
              <button onClick={this.handleGreet} className="btn btn-primary">Make me older</button>
              <hr />
              <button onClick={this.handleChangeName} className="btn btn-primary">Change Name</button>
            </div>
          </div>
        </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children:PropTypes.element.isRequired,
  greet: PropTypes.func
};
