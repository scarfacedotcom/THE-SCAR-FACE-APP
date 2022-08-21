import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCrRlRhTFFCns3FnSq4OR_Zm9jmvXV5YlA",
  authDomain: "the-scar-face-app.firebaseapp.com",
  projectId: "the-scar-face-app",
  storageBucket: "the-scar-face-app.appspot.com",
  messagingSenderId: "630294871043",
  appId: "1:630294871043:web:82141a03439138e2aa6236"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init srevices
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }