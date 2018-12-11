import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import classnames from 'classnames';

class Track extends Component {
  onLikeCLick = (id, dispatch) => {
    dispatch({
      type: 'LIKE_SONG',
      payload: id
    });
  };

  onUnlikeCLick = (id, dispatch) => {
    dispatch({
      type: 'UNLIKE_SONG',
      payload: id
    });
  };

  onRequestClick = (id, dispatch) => {
    dispatch({
      type: 'REQUEST_SONG',
      payload: id
    });
  };

  render() {
    const { id, name, artist, img, like, unlike, request } = this.props.track;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  className="card img-top border-0"
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
                  <ul className="list-group border-0">
                    <li className="list-group-item bg-dark border-0">
                      <div className="row bg-dark">
                        <div
                          className={classnames(
                            'col btn btn-sm btn-outline-success',
                            { 'bg-success': like }
                          )}
                          onClick={this.onLikeCLick.bind(this, id, dispatch)}
                        >
                          <i
                            className="fas fa-thumbs-up"
                            style={{ color: 'white' }}
                          />
                        </div>

                        <div
                          className={classnames(
                            'col btn btn-sm btn-outline-success',
                            { 'bg-success': unlike }
                          )}
                          onClick={this.onUnlikeCLick.bind(this, id, dispatch)}
                        >
                          <i
                            className="fas fa-thumbs-down"
                            style={{ color: 'white' }}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item bg-dark border-0">
                      <div
                        className={classnames(
                          'col btn btn-sm btn-outline-success',
                          { 'btn-outline-dark bg-success': request }
                        )}
                        onClick={this.onRequestClick.bind(this, id, dispatch)}
                      >
                        Request
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
