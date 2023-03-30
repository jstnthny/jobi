// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB53zdXNVhfhuLQYon-2c1fjcbYKBMcm7M",
  authDomain: "jobi-e8ba5.firebaseapp.com",
  projectId: "jobi-e8ba5",
  storageBucket: "jobi-e8ba5.appspot.com",
  messagingSenderId: "525069173136",
  appId: "1:525069173136:web:842c9827b7a4f82a51b315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)