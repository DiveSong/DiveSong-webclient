import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Track extends Component {
  state = {
    //showTrackInfo: false
  };

  render() {
    const { id, name, artist, img } = this.props.track; // Destructuring.
    // const { showTrackInfo } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="col-md-4">
              <div
                className="card mb-4 bg-dark"
                // style={{ cursor: 'pointer' }}
                // onClick={() =>
                //   this.setState({
                //     showTrackInfo: !this.state.showTrackInfo
                //   })
                // }
              >
                <img
                  className="card img-top"
                  src={img}
                  alt={name}
                  height="225px"
                  width="100%"
                />
                <div className="card-body">
                  <h6 className="text-white-50 bg-dark text-truncate">
                    {name} - {artist}{' '}
                  </h6>

                  {/* {showTrackInfo ? ( */}
                  <ul className="list-group">
                    <li className="list-group-item bg-dark">
                      <div className="row bg-dark">
                        <div className="col btn btn-sm btn-outline-success">
                          <i
                            className="fas fa-thumbs-up"
                            style={{ color: 'white' }}
                          />
                        </div>
                        <div className="col btn btn-sm btn-outline-success">
                          <i
                            className="fas fa-thumbs-down"
                            style={{ color: 'white' }}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item bg-dark">
                      <div className="col btn btn-sm btn-outline-success">
                        Request Song
                      </div>
                    </li>
                  </ul>
                  {/* ) : null} */}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Track.propTypes = {
  track: PropTypes.object.isRequired
};

export default Track;
