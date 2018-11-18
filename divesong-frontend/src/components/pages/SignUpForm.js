import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link, NavLink } from 'react-router-dom';
import uuid from 'uuid';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    console.log('The form was submitted with the following data:');
    console.log(this.state);

    const newUser = {
      id: uuid(),
      name,
      email,
      password
    };

    dispatch({
      type: 'ADD_USER',
      payload: newUser
    });

    this.props.history.push('/sign-in');
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="PageSwitcher">
                <NavLink
                  to="/sign-in"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign Up
                </NavLink>
              </div>

              <div className="FormTitle">
                <NavLink
                  to="/sign-in"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign In
                </NavLink>{' '}
                or{' '}
                <NavLink
                  exact
                  to="/"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign Up
                </NavLink>
              </div>
              <div className="FormCenter">
                <form
                  onSubmit={this.handleSubmit.bind(this, dispatch)}
                  className="FormFields"
                >
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="FormField__Input text-dark"
                      placeholder="Enter your full name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="FormField__Input text-dark"
                      placeholder="Enter your password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">
                      E-Mail Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="FormField__Input text-dark"
                      placeholder="Enter your email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                      <input
                        className="FormField__Checkbox"
                        type="checkbox"
                        name="hasAgreed"
                        value={this.state.hasAgreed}
                        onChange={this.handleChange}
                      />{' '}
                      I agree all statements in{' '}
                      <a href="" className="FormField__TermsLink">
                        terms of service
                      </a>
                    </label>
                  </div>

                  <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button>{' '}
                    <Link to="/sign-in" className="FormField__Link">
                      I'm already member
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SignUpForm;
