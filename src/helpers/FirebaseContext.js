import React, { createContext } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

createContext;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID
};

function connectToFirebase(config) {
  app.initializeApp(config);
  let auth = app.auth();
  return auth;
}

const firebaseInstance = connectToFirebase(firebaseConfig);

const FirebaseContext = createContext(firebaseInstance);

export default FirebaseContext;
