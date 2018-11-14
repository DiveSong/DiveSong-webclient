import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="DiveSong" />
      </div>
    );
  }
}

export default App;
