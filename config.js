import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAMssMXL1NA2FjJmK7O15BWEiMw3fsy-LQ",
  authDomain: "santabook-4614a.firebaseapp.com",
  projectId: "santabook-4614a",
  storageBucket: "santabook-4614a.appspot.com",
  messagingSenderId: "615479665407",
  appId: "1:615479665407:web:b8457af4601a7b4dec22ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
