import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Helmet } from 'react-helmet';
import { withFirebase } from '../components/Firebase';

const Home = ({ uid }) => {

  const head = () => {
    return (
      <Helmet>
        <title>{`Yay html title here`}</title>
        <meta
          property="og:title"
          content={`YAY its facebook sharable ${uid}`}
        />
         <meta
          property="og:description"
          content={`YAY its a description about this and that sharable`}
        />
      </Helmet>
    );
  };

  return (
    <div className="center-align" style={{ marginTop: 200 }}>
      {head()}
      <h3>Logged In Home Page</h3>
      <p>this is where the uid prop went</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    uid: state.auth.uid
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
