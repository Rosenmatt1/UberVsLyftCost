import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js'
import Comparison from './Components/Comparison.js'
import Logo from './Components/Logo.js'

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Form />
        <Comparison />
      </div>
    );
  }
}

export default App;
