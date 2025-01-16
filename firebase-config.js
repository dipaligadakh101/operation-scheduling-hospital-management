// Firebase Configuration
const firebaseConfig = {
    apiKey: "apply your api key",
    authDomain: "operationschedulingmanagement.firebaseapp.com",
    databaseURL: "https://operationschedulingmanagement-default-rtdb.firebaseio.com",
    projectId: "operationschedulingmanagement",
    storageBucket: "operationschedulingmanagement.firebasestorage.app",
    messagingSenderId: "apply your id",
    appId: "apply your id"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
// Get Firestore instance
const db = getFirestore(app);

export { db }; // Export db for use in other files
