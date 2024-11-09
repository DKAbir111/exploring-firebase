// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxbH17Xjm2nOfxG1ueEiBJkf4-s-rJxk8",
    authDomain: "simple-react-2-13436.firebaseapp.com",
    projectId: "simple-react-2-13436",
    storageBucket: "simple-react-2-13436.firebasestorage.app",
    messagingSenderId: "54300267724",
    appId: "1:54300267724:web:d9a4b62becf664a4915e69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)