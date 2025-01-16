// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG8L3rITbAYveN5n90bAGAP9SNcFwNyUw",
    authDomain: "operationschedulingmanagement.firebaseapp.com",
    databaseURL: "https://operationschedulingmanagement-default-rtdb.firebaseio.com",
    projectId: "operationschedulingmanagement",
    storageBucket: "operationschedulingmanagement.firebasestorage.app",
    messagingSenderId: "43089010562",
    appId: "1:43089010562:web:bba7792900f2e2d326799b"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
// Get Firestore instance
const db = getFirestore(app);

export { db }; // Export db for use in other files
