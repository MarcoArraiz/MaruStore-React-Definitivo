import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "marustore-react.firebaseapp.com",
    projectId: "marustore-react",
    storageBucket: "marustore-react.appspot.com",
    messagingSenderId: "434577037110",
    appId: "1:434577037110:web:ffb6d370118ba4384dc597"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);