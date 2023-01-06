import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC27mtaTfuIRw9DFIThG4zOdIUA5qGeUBs",
  authDomain: "budgety-e220d.firebaseapp.com",
  projectId: "budgety-e220d",
  storageBucket: "budgety-e220d.appspot.com",
  messagingSenderId: "361325068770",
  appId: "1:361325068770:web:bc1f357e33853b3632f9bb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
