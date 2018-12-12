import React, { Component } from 'react';
import { config } from '../../config';
import axios from 'axios';

class Footer extends Component {
  state = {
    song: {}
  };

  async componentDidMount() {
    const res = await axios.get(
      `http://${config.server.hostname}:${config.server.port}/detailNextSong`
    ); // Dont forget the await!!

    this.setState({
      song: res.data
    });
  }
  render() {
    // const { branding } = this.props;

    const { name, artists } = this.state.song;

    return (
      <footer className="footer veryblack">
        &nbsp;&nbsp;
        <span className="text-muted">
          {name} <br />
          &nbsp;{artists}{' '}
        </span>
        <label htmlFor="switch" />
        <div className="container">
          <iframe
            src={`http://${config.server.hostname}:${
              config.server.port
            }/playNextSong`}
          >
            {' '}
          </iframe>
        </div>
      </footer>
    );
  }
}
export default Footer;
