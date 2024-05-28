// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAcfS4XlTslh1v01KwkN24uzNDUvA2RSxU",
    authDomain: "landing-boda.firebaseapp.com",
    projectId: "landing-boda",
    storageBucket: "landing-boda.appspot.com",
    messagingSenderId: "1062137138727",
    appId: "1:1062137138727:web:40b4b12ffa55390eabc802",
    measurementId: "G-GTGWB4D647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);