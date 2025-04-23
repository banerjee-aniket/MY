import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import AppRoutes from './routes/AppRoutes';
import './styles/index.css';

// Firebase Config from environment variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const App = () => {
    const [user, setUser] = useState(null);
    const [isPremium, setIsPremium] = useState(false);

    const db = firebase.firestore();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            setUser(user);
            if (user) {
                const userDoc = await db.collection('users').doc(user.uid).get();
                if (userDoc.exists) {
                    setIsPremium(userDoc.data().isPremium || false);
                }
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <AppRoutes user={user} setIsPremium={setIsPremium} isPremium={isPremium} />
        </div>
    );
};

export default App;