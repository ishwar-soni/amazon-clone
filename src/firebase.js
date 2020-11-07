import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBoUoVN1Q6eLppT84ltAgDqb2DWAhCTsKk",
  authDomain: "clone-ishwar.firebaseapp.com",
  databaseURL: "https://clone-ishwar.firebaseio.com",
  projectId: "clone-ishwar",
  storageBucket: "clone-ishwar.appspot.com",
  messagingSenderId: "359631688637",
  appId: "1:359631688637:web:34da37e7bce156a259b8d4",
  measurementId: "G-4VGZ9MFJTF",
});

const db = firebaseApp.firestore;
const auth = firebase.auth();

export { db, auth };
