import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAtA1B10k8_712zGH2WOIPd8HgAnKvvsCE",
  authDomain: "budget-pls.firebaseapp.com",
  databaseURL: "https://budget-pls-default-rtdb.firebaseio.com",
  projectId: "budget-pls",
  storageBucket: "budget-pls.appspot.com",
  messagingSenderId: "1018378637813",
  appId: "1:1018378637813:web:93c1e9b2ea6a58d34450bc",
  measurementId: "G-ZLRJHXF8C5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

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