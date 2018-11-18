import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Tracks from './Tracks';

class Tracks1 extends Component {
  render() {
    return (
      <div className="background">
        <Header branding="DiveSong" />

        <Tracks />

        <Footer />
      </div>
    );
  }
}

export default Tracks1;
