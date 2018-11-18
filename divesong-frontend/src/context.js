import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    tracks: [
      {
        id: 1,
        name: 'John Doe',
        artist: 'John Doe',
        img:
          'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F2ffbcb4f4921cb2dad89925466513a98.1000x1000x1.jpg',
        like: false,
        unlike: false,
        request: true
      },
      {
        id: 2,
        name: 'Karen Williams',
        artist: 'Karen Williams',
        img:
          'https://c-sf.smule.com/sf/s77/sing/performance/cover/12/7e/ece6ca8c-07e1-4642-a3fa-27dffa135fc5_1024.jpg',
        like: false,
        unlike: false,
        request: true
      },
      {
        id: 3,
        name: 'Henry Johnson',
        artist: 'Henry Johnson',
        img:
          'https://static.stereogum.com/uploads/2018/11/thank-u-next-1541300369-640x640.jpg',
        like: false,
        unlike: false,
        request: true
      },
      {
        id: 4,
        name: 'Scarlett Ray',
        artist: 'Scarlett Ray',
        img:
          'https://upload.wikimedia.org/wikipedia/en/8/8f/Zara_Larsson_-_Lush_Life.png',
        like: false,
        unlike: false,
        request: true
      }
    ],

    users: [
      {
        id: 1,
        name: 'Moosa',
        email: 'moosa@gmail.com',
        password: '1234'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
