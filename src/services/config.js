import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNrpUaVzARgptzqhHg6UO3jy9AL3Vxf2I",
    authDomain: "marustore-a1373.firebaseapp.com",
    projectId: "marustore-a1373",
    storageBucket: "marustore-a1373.appspot.com",
    messagingSenderId: "839833268210",
    appId: "1:839833268210:web:d86128450141528be6c56b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);