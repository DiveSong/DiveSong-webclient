import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <Consumer>
        {value => {
          const { user } = value;
          return (
            <nav className="navbar navbar-expand-sm navbar-dark veryblack mb-3 py-0 sticky-top">
              <div className="container">
                <Link to="/homepage" className="navbar-brand">
                  {branding}
                </Link>
                <input
                  className="form-control bg-dark w-50 border-0 text-white-50"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div>
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to="/homepage" className="nav-link">
                        <i className="fas fa-home"> Home</i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Log Out
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/profile" className="nav-link">
                        {user.fname}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
