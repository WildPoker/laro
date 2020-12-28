import "firebase/auth";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAoFGYnhuU0cqDNj68q1kVsWG-vCGEcmzs",
  authDomain: "laro-7063a.firebaseapp.com",
  projectId: "laro-7063a",
  storageBucket: "laro-7063a.appspot.com",
  messagingSenderId: "291113209750",
  appId: "1:291113209750:web:2f41fcf30a20717318d7b7",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const db = fire.firestore();

export { auth, db };
export default fire;
