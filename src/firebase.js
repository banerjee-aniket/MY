// src/firebase.js

// Import the necessary functions from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth } from "firebase/auth"; // Authentication (optional)
import { getStorage } from "firebase/storage"; // Storage (optional)

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKj8wQXEdbLv48iB5SX37q-mNqBZ_YO3M",
  authDomain: "gamelinked-a026e.firebaseapp.com",
  projectId: "gamelinked-a026e",
  storageBucket: "gamelinked-a026e.firebasestorage.app",
  messagingSenderId: "10763280638",
  appId: "1:10763280638:web:edc12cab0d04c7d01005af",
  measurementId: "G-TQS8SHTC4B"
};

// Export firebaseConfig
export { firebaseConfig };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app); // For Google Analytics
const db = getFirestore(app); // Firestore
const auth = getAuth(app); // Authentication (optional)
const storage = getStorage(app); // Storage (optional)

// Export services for use in other parts of the app
export { db, auth, storage, analytics };
