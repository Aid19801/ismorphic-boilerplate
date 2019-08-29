// import React, { Component } from 'react';
// import app from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID
// };

// const WithFirebase = Component => {
//   class DecoratedComponent extends Component {
//     constructor() {
//       super();
//       this.state = {};
//       app.initializeApp(firebaseConfig);
//       this.auth = app.auth();
//       // this.auth = 'firebase prop here'
//     }

//     componentDidMount() {
//       console.log('env var: ', process.env.REACT_APP_API_KEY)
//       this.auth.onAuthStateChanged(user => {
//         if (user) return console.log('user is ', user);
//         if (!user) return console.log('no one signed in');
//       });
//     }

//     render() {
//       return <Component {...this.props} firebase={this.auth} />;
//     }
//   }

//   return DecoratedComponent;
// };

// export default WithFirebase;
