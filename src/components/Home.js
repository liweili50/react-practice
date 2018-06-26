import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component {
  render() {
    console.log(this.props)
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offet-11">
              <div>your name is {this.props.name}，age{this.props.age}</div>
              <div>
                <h5>hobbies</h5>
                <ul>
                  {this.props.user.hobbies.map(function (hobby,i) {
                    return <li key = {i}>{hobby}</li>
                  })}
                </ul>
              </div>
              <div>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
};
