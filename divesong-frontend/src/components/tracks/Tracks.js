import React, { Component } from 'react';
import Track from './Track';
import { Consumer } from '../../context';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tracks, users, user } = value;

          return (
            <React.Fragment>
              <div className="container">
                <h1 className="display-4 mb-2">
                  <span className="text-success">Play</span>{' '}
                  <span className="text-light">Music</span>
                </h1>
                <div className="album py-5">
                  <div className="container">
                    <div className="row">
                      {tracks.map(track => (
                        <Track key={track.id} track={track} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Tracks;
