import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import classnames from 'classnames';
import { config } from '../../config';
import axios from 'axios';
// import serialize from '../../serialize';

class Track extends Component {
  onLikeCLick = (id, uid, dispatch) => {
    dispatch({
      type: 'LIKE_SONG',
      payload: id
    });
  };

  onUnlikeCLick = async (id, uid, dispatch) => {
    const oper = {
      auth_token:
        'ec57c339c48b3a9e6ef60a8dbd8111e5d21518c5adc23a596ec3ecd9134349c804ef5f09952470abc6edd859c61eb0e03b64afc9c76e7cc5243590d68b596c040dfbe14f74d35bbecf18736d5a7db41961dd19cefeae0087fce6e7247ceb29c0d3c91d942b4f969df703b171b6e0b385e9ec8f46c3fc2e86f0c64ad0f6ba85c0',
      'user-agent':
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:63.0) Gecko/20100101 Firefox/63.0',
      tid: 1,
      operation: 'like',
      uid: 2
    };
    // await axios
    //   .post(`http://${config.server.hostname}:${config.server.port}/like`, oper)
    //   .then(res =>
    //     dispatch({
    //       type: 'UNLIKE_SONG',
    //       payload: id
    //     })
    //   );
    let serialize = function(obj, prefix) {
      var str = [],
        p;
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          var k = prefix ? prefix + '[' + p + ']' : p,
            v = obj[p];
          str.push(
            v !== null && typeof v === 'object'
              ? serialize(v, k)
              : encodeURIComponent(k) + '=' + encodeURIComponent(v)
          );
        }
      }
      return str.join('&');
    };
    const query = {
      auth_token:
        'ec57c339c48b3a9e6ef60a8dbd8111e5d21518c5adc23a596ec3ecd9134349c804ef5f09952470abc6edd859c61eb0e03b64afc9c76e7cc5243590d68b596c040dfbe14f74d35bbecf18736d5a7db41961dd19cefeae0087fce6e7247ceb29c0d3c91d942b4f969df703b171b6e0b385e9ec8f46c3fc2e86f0c64ad0f6ba85c0',
      'user-agent':
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:63.0) Gecko/20100101 Firefox/63.0',
      tid: id,
      operation: 'like',
      uid: 2
    };
    fetch(
      `http://${config.server.hostname}:${config.server.port}/like?` +
        serialize(query),
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    ).then(res =>
      dispatch({
        type: 'UNLIKE_SONG',
        payload: id
      })
    );
  };

  onRequestClick = (id, uid, dispatch) => {
    dispatch({
      type: 'REQUEST_SONG',
      payload: id
    });
  };

  render() {
    const { id, name, artist, img, like } = this.props.track;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { user } = value;
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
                            { 'bg-success': like === 1 }
                          )}
                          onClick={this.onLikeCLick.bind(
                            this,
                            id,
                            user.id,
                            dispatch
                          )}
                        >
                          <i
                            className="fas fa-thumbs-up"
                            style={{ color: 'white' }}
                          />
                        </div>

                        <div
                          className={classnames(
                            'col btn btn-sm btn-outline-success',
                            { 'bg-success': like === -1 }
                          )}
                          onClick={this.onUnlikeCLick.bind(
                            this,
                            id,
                            user.id,
                            dispatch
                          )}
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
                          { 'btn-outline-dark bg-success': false }
                        )}
                        onClick={this.onRequestClick.bind(
                          this,
                          id,
                          user.id,
                          dispatch
                        )}
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
