import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Wizard from './Wizard/Wizard';

class App extends Component {
  state = {
    heading: 'YOU ARE ON STEP 0'
  }

  stepChanged = (step) => {
    this.setState({ heading: `YOU ARE ON STEP ${step}`});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h2>{this.state.heading}</h2>
          <Wizard stepChanged={this.stepChanged} />
        </div>
      </div>
    );
  }
}

export default App;
