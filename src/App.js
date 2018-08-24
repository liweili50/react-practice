import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home'

import ComponentApp from './components/CommentApp';
class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLink: "home"
    }
    this.onChangeLinkName = this.onChangeLinkName.bind(this)
  }
  onGreet(age) {
    alert(age)
  }
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    })
  }
  render() {
    const user = {
      name: "Anna",
      hobbies: ["sports", "reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offet-11">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offet-11">
            <h1>hello world</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offet-11">
            <Home name={'Max'} initalAge={12} user={user} greet={this.onGreet} changeName={this.onChangeLinkName}>
              <p>i am child</p>
            </Home>
          </div>
        </div>
        <ComponentApp />
      </div>
    );
  }
}

export default App;