// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABNB2S_SjX8xDqm0CbZ0BriPooxDOZdOU",
    authDomain: "sportervn-a3aac.firebaseapp.com",
    projectId: "sportervn-a3aac",
    storageBucket: "sportervn-a3aac.appspot.com",
    messagingSenderId: "463317807901",
    appId: "1:463317807901:web:3c37afbf70b53cf68627f4",
    measurementId: "G-HV7MLZDCS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);