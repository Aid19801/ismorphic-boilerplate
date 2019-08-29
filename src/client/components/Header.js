import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { compose } from 'recompose';
import { withFirebase } from './Firebase/index';
import { AuthUserContext } from './Session';

const Header = ({ isAdmin, privs, firebase }) => {

  // console.log('firebase is ', firebase.meQuery)


  // if (firebase) {
  //   if (firebase.meQuery) {
  //     console.log('firebase.mequery ', firebase.meQuery());
  //   }
  // }


  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" style={{ paddingLeft: 15 }}>
            React SSR
          </Link>

          <ul className="right">
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/admins">Admins</Link>
            </li>
          </ul>
        </div>
      </nav>

      <AuthUserContext.Consumer>
        {authUser => {
          return authUser ? (
            <li>
              <Link to="/login">Log Out</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Log Out</Link>
            </li>
          );
        }}
      </AuthUserContext.Consumer>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    null
  )
)(Header);
