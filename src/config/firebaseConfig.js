import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCykiu0fT-OmA0aab9d2A7YB1OoSCv0iVY",
  authDomain: "volume-iv.firebaseapp.com",
  databaseURL: "https://volume-iv.firebaseio.com",
  projectId: "volume-iv",
  storageBucket: "volume-iv.appspot.com",
  messagingSenderId: "639155267070"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase; 
