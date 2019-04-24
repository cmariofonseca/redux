import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDrD4P3ItXKn32YqyQlvEA5C8TGMQbJuLU',
  authDomain: 'projectmariodev.firebaseapp.com',
  databaseURL: 'https://projectmariodev.firebaseio.com',
  projectId: 'projectmariodev',
  storageBucket: 'projectmariodev.appspot.com',
  messagingSenderId: '783613227688'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;