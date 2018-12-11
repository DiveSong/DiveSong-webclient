import React, { Component } from 'react';
import { config } from './config';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users]
      };

    case 'TEMP_USER':
      return {
        ...state,
        user: action.payload
      };

    case 'LIKE_SONG':
      return {
        ...state,
        tracks: state.tracks.map(
          track => (
            track.id === action.payload
              ? track.like === 1
                ? (track.like = 0)
                : (track.like = 1)
              : { track },
            track
          )
        )
      };

    case 'UNLIKE_SONG':
      return {
        ...state,
        tracks: state.tracks.map(
          track => (
            track.id === action.payload
              ? track.like === -1
                ? (track.like = 0)
                : (track.like = -1)
              : { track },
            track
          )
        )
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    tracks: [],

    user: {
      id: 1,
      name: 'Moosa',
      email: 'moosa@gmail.com',
      password: '1234'
    },

    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get(
      `http://${config.server.hostname}:${config.server.port}/songlist?${
        this.state.user.id
      }`
    ); // Dont forget the await!!

    this.setState({
      tracks: res.data
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
