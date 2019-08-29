import React from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withAuthentication } from './components/Session'
import { fetchCurrentUser } from './actions';

const App = ({ route, firebase }) => {


  firebase.auth.onAuthStateChanged((user) => {
    if (user && user.uid === process.env.REACT_APP_PANDA_RIOT_ADMINI) {
      console.log('user id is an admin: ', user.uid);
      // this.props.isAdmin();
    } else {
      console.log('ixnay');
    }
  })

  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};
 
export default {
  component: compose(
    withAuthentication,
    connect(null, null)
  )(App),
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
