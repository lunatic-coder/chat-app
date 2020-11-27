import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAZ_xCNW0pYQnD-wZTeGLka02Fsxc5jCKw',
  authDomain: 'chat-web-app-3ef88.firebaseapp.com',
  databaseURL: 'https://chat-web-app-3ef88.firebaseio.com',
  projectId: 'chat-web-app-3ef88',
  storageBucket: 'chat-web-app-3ef88.appspot.com',
  messagingSenderId: '765760476311',
  appId: '1:765760476311:web:ac121f1c613839d62085d2',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
