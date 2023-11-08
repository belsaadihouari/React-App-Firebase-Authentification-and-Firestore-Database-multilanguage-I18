// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPd_IblDXqGB9en_ESksfUpFZfAGfWfhY",
  authDomain: "testhouari-76aed.firebaseapp.com",
  projectId: "testhouari-76aed",
  storageBucket: "testhouari-76aed.appspot.com",
  messagingSenderId: "597241924384",
  appId: "1:597241924384:web:708181a1abeb8e4a7fe545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export   const db = getFirestore(app);