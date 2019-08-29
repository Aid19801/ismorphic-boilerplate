import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFirebase } from '../components/Firebase';
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      blob: null,
    };
  }

  componentDidMount = async () => {
    const { firebase } = this.props;
    firebase.doSignInWithEmailAndPassword('thepandariot@gmail.com', '&Alpha01')
      .then(res => {
        this.setState({ blob: res });
      })
  };

  render() {
    console.log('this state ', this.state.blob);
    return (
      <div className="center-align" style={{ marginTop: 200 }}>
        <h3>Login</h3>
        <p>This is a LOGIN PAGE</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default {
  component: compose(
    withFirebase,
    connect(mapStateToProps)
  )(LoginPage)
};
