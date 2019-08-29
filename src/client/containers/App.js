import React from 'react';
import { renderRoutes }  from 'react-router-config';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withAuthentication } from '../components/Session';
import { fetchCurrentUser } from '../actions';
import Header from '../components/Header';

const App = ({route})=>{
    return (
        <div>
            <Header/>
            { renderRoutes(route.routes) }
        </div>
    )
}
export default {
    component: compose(
        withAuthentication,
        connect(null, null)
    )(App),
    loadData: ({dispatch}) => dispatch(fetchCurrentUser())
}