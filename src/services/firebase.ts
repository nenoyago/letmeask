import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBIgOpLnX7Ai0ipbVaInSSusP9RSZunu7w',
  authDomain: 'letmeask-2c404.firebaseapp.com',
  databaseURL: 'https://letmeask-2c404-default-rtdb.firebaseio.com',
  projectId: 'letmeask-2c404',
  storageBucket: 'letmeask-2c404.appspot.com',
  messagingSenderId: '655443971116',
  appId: '1:655443971116:web:3b7d8c15a0a0df40471589',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
