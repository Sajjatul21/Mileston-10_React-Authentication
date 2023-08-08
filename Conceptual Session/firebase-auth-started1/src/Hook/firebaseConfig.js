// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3ygZJLhScwV9r62HDOSfaNVGO00VVb8U",
    authDomain: "fir-auth-1a4d8.firebaseapp.com",
    projectId: "fir-auth-1a4d8",
    storageBucket: "fir-auth-1a4d8.appspot.com",
    messagingSenderId: "587925988506",
    appId: "1:587925988506:web:21b5720f0f268901972b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;