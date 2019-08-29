import React, { Component } from 'react';
import WithFirebase from '../components/hocs/withFirebase';

class LoginPage extends Component {

  // componentDidMount() {
  //   const foo = this.props.firebase.onAuthStateChanged((user) => {
  //     if (user) return user;
  //     if (!user) return console.log('no one signed in');
  //   })
  //   console.log('foo is ', foo);
  // }

  render() {
    return (
      <div className="center-align" style={{ marginTop: 200 }}>
        <h3>Login</h3>
        <p>This is a LOGIN PAGE</p>
      </div>
    );
  }
}

export default {
  component: LoginPage,
};

// class LoginPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: ''
//     };
//     this.firebase = new WithFirebase();
//   }

//   componentDidMount() {
//       const foo = this.firebase.me();
//       console.log('foo is ', foo);

//   }

//   onSubmit() {
//     const { email, password } = this.state;
//     console.log('firebase in props: ', this.props.firebase);
//     // this.props.firebase
//     //   .doSignInWithEmailAndPassword(email, password)
//     //   .then((res) => {
//     //     // console.log('res is ', res);
//     //     this.setState({ ...INITIAL_STATE });
//     //     this.props.history.push(ROUTES.HOME);
//     //   })
//     //   .catch(error => {
//     //     this.setState({ error });
//     //   });

//     // event.preventDefault();
//   };

//   onChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   render() {
//     const { email, password, error } = this.state;

//     return (
//       <div>
//         <form className="form__stackable-form" onSubmit={this.onSubmit}>
//           <input
//             name="email"
//             value={email}
//             onChange={this.onChange}
//             type="text"
//             placeholder="Email Address"
//           />
//           <input
//             name="password"
//             value={password}
//             onChange={this.onChange}
//             type="password"
//             placeholder="Password"
//           />
//           <button className="btn__orange" disabled={isInvalid} type="submit">
//             Sign In
//           </button>

//           {error && <p>{error.message}</p>}
//         </form>
//       </div>
//     );
//   }
// }

// export default {
//   component: WithFirebase(LoginPage),
// };

// export default WithFirebase(LoginPage);
