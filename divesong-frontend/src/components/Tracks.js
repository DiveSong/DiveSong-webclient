import React, { Component } from 'react';
import Track from './Track';
import { Consumer } from '../context';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tracks } = value;
          return (
            <div className="album py-5">
              <div className="container">
                <div className="row">
                  {tracks.map(track => (
                    <Track key={track.id} track={track} />
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Tracks;
