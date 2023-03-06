import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIET_keb9uu8r0Kq_K4kyPjtvUwUuQ05o",
  authDomain: "chatflame-d6ad9.firebaseapp.com",
  projectId: "chatflame-d6ad9",
  storageBucket: "chatflame-d6ad9.appspot.com",
  messagingSenderId: "1042819510816",
  appId: "1:1042819510816:web:4944b802acf2588285c245",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
