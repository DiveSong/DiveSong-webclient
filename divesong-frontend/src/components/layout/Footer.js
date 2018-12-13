import React, { Component } from 'react';
import { config } from '../../config';
import axios from 'axios';
import { Helmet } from 'react-helmet';

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

    // const s = document.createElement('script');
    // s.type = 'text/javascript';
    // s.async = true;
    // s.innerHTML =
    //   'var aud = document.getElementById("myAudio");aud.onended = function() {alert("The audio has ended");};';
    // document.body.appendChild(s);
  }
  render() {
    // const { branding } = this.props;

    const { name, artists, lplayed } = this.state.song;
    console.log(lplayed);

    return (
      <React.Fragment>
        <footer className="footer veryblack">
          &nbsp;&nbsp;
          <span className="text-muted">
            {name} <br />
            &nbsp;{artists}{' '}
          </span>
          <label htmlFor="switch" />
          <div className="container">
            {/* {setTimeout(
            () => (
              console.log('Next Song In'),
              (
                <iframe
                  src={`http://${config.server.hostname}:${
                    config.server.port
                  }/playNextSong`}
                >
                  {' '}
                </iframe>
              )
            ),
            duration * 1000
          )} */}

            {/* <iframe
              src={`http://${config.server.hostname}:${
                config.server.port
              }/playNextSong`}
            >
              {' '}
            </iframe> */}
            <div id="myDiv">
              <audio
                id="myAudio"
                controls
                autoPlay
              // onEnded={document.getElementById('myAudio').load()}
              // onEnded={{
              //   function() {
              //     alert('Audio has ended');
              //   }
              // }}
              >
                <source id="mySource" src={`http://${config.server.hostname}:${config.server.port}/getNextSong`} type="audio/mp3" />
              </audio>
            </div>
          </div>
          {/* <script /> */}
        </footer>

        <Helmet>
          <script>
            {/* {
              `var aud = document.getElementById("myAudio"); aud.onended = function() {document.getElementById("myDiv").innerHTML="<audio id='myAudio' controls autoPlay <source id=\'mySource\' src={'http://'${config.server.hostname}:${config.server.port}/getNextSong'} type=\'audio/mp3\'/> </audio>"; console.log('Song Ended')};`
            } */}
            {
              // `var aud = document.getElementById("myAudio"); aud.onended = function() {document.getElementById("mySource").src='http://${config.server.hostname}:${config.server.port}/getNextSong' ;aud.load(); console.log('Song Change ')}`
            }
          </script>
        </Helmet>
      </React.Fragment>
    );
  }
}
export default Footer;
