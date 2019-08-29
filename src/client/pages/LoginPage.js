import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as actions from '../actions';
import { removeFromCache, saveToCache } from '../../helpers/cache';
import { withFirebase } from '../components/Firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginPage extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount = () => {
    removeFromCache('uid')
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (event) => {
    const { email, password } = this.state;
    const { firebase } = this.props;
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(res => {
        res && res.user && res.user.uid ?
        this.saveUidToReduxAndCache(res.user.uid)
        : this.setState({ error: 'incorrect credentials' });
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/')
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
      event.preventDefault();
  };

  saveUidToReduxAndCache = uid => {
    this.props.getUserUid(uid);
    saveToCache('uid', uid);
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div className="center-align" style={{ marginTop: 200 }}>
        <h3>Login</h3>
        <form className="form__stackable-form" onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button className="btn__orange" disabled={isInvalid} type="submit">
            Sign In
          </button>

          { error && <p>{error}</p> }
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  getUserUid: (uid) => dispatch({ type: actions.GET_UID, uid })
})

export default {
  component: compose(
    withFirebase,
    connect(mapStateToProps, mapDispatchToProps)
  )(LoginPage)
};
