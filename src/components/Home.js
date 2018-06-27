import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      age: props.initalAge
    }
    this.onMarkOlder = this.onMarkOlder.bind(this);
    this.handleGreet = this.handleGreet.bind(this)
  }
  onMarkOlder() {
    this.setState({
      age: this.state.age+3
    })
  }
  handleGreet() {
    this.props.greet(this.state.age)
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
