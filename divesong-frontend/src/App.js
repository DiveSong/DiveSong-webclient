import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Tracks from './components/Tracks';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App bg-dark">
          <Header branding="DiveSong" />

          <Tracks />
        </div>
      </Provider>
    );
  }
}

export default App;
