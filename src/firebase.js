import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBe__YR6weixzP43x8ZDIfmUBERj2ca5tI",
  authDomain: "golivechecklist-2462c.firebaseapp.com",
  databaseURL: "https://golivechecklist-2462c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "golivechecklist-2462c",
  storageBucket: "golivechecklist-2462c.appspot.com",
  messagingSenderId: "455778439131",
  appId: "1:455778439131:web:4102334bbbca596c01e1fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}