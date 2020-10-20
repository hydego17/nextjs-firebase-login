const firebase = require("firebase/app")

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDJanixIEu5n1KLoaFSwzcNmFda5TmrSUM",
  authDomain: "nextjs-firebaseauth.firebaseapp.com",
  databaseURL: "https://nextjs-firebaseauth.firebaseio.com",
  projectId: "nextjs-firebaseauth",
  storageBucket: "nextjs-firebaseauth.appspot.com",
  messagingSenderId: "471496938940",
  appId: "1:471496938940:web:771ca4e77c1fd4512207b9",
}

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG)
  }
}
