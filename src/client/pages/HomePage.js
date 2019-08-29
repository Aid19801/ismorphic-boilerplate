import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as actions from '../actions';
import { saveToCache } from '../../helpers/cache';
import { withFirebase } from '../components/Firebase';

const Home = ({ uid }) => {
  return (
    <div className="center-align" style={{ marginTop: 200 }}>
      <h3>Logged In Home Page</h3>
      <p>your uid is {uid}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    uid: state.auth.uid,
  };
};

export default {
  component: compose(
    withFirebase,
    connect(
      mapStateToProps,
      null
    )
  )(Home)
};
