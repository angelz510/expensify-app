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

firebase.database().ref().set({
  name: 'Angel R'
});