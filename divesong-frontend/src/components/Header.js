import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark veryblack mb-3 py-0 sticky-top">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <input
            className="form-control bg-dark w-100 border-0"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
