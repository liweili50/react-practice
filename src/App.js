import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home'
class App extends Component {
  onGreet(age) {
    alert(age)
  }
  render() {
    const user = {
      name:"Anna",
      hobbies: ["sports","reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offet-11">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offet-11">
            <h1>hello world</h1>
            <div>test</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offet-11">
            <Home name={'Max'} initalAge={12} user={user} greet={this.onGreet}>
            <p>i am child</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;