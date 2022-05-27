// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: 'AIzaSyCf5qKIuUv3zhHp3NGMD8z3xCxMu0GJ0IQ',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "netflix-clone-6fbde",
    storageBucket: "netflix-clone-6fbde.appspot.com",
    messagingSenderId: "176231690501",
    appId: "1:176231690501:web:ea49a39ada1c37528cc76c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)