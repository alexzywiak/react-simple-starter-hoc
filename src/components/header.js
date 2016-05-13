import React, { Component } from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { authenticate } from '../actions/index';

class Header extends Component {

  authButton() {
    return <button onClick={() => { this.props.authenticate(!this.props.authenticated)}}>
      {(this.props.authenticated) ? 'Sign Out' : 'Sign In'}
    </button>
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {authenticated: state.authenticated};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({authenticate}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);