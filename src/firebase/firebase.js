import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expense').push({
//   description: 'Puzzle',
//   note: '',
//   amount: 12.99,
//   createdAt: 'Monday'
// });

// database.ref('expense').push({
//   description: 'Candle',
//   note: '',
//   amount: 5.99,
//   createdAt: 'Tuesday'
// });

// database.ref('expense').push({
//   description: 'Computer',
//   note: '',
//   amount: 1999.99,
//   createdAt: 'Thursday'
// });