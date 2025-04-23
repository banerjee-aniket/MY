import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';


import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './utils/ErrorBoundary';



const App = () => {
     const [user, setUser] = useState(null);
    const [isPremium, setIsPremium] = useState(false);

    console.log("VITE_FIREBASE_API_KEY:", import.meta.env.VITE_FIREBASE_API_KEY);
    console.log("VITE_FIREBASE_AUTH_DOMAIN:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
    console.log("VITE_FIREBASE_PROJECT_ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);
    console.log("VITE_FIREBASE_STORAGE_BUCKET:", import.meta.env.VITE_FIREBASE_STORAGE_BUCKET);
    console.log("VITE_FIREBASE_MESSAGING_SENDER_ID:", import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID);
    console.log("VITE_FIREBASE_APP_ID:", import.meta.env.VITE_FIREBASE_APP_ID);
    console.log("VITE_FIREBASE_MEASUREMENT_ID:", import.meta.env.VITE_FIREBASE_MEASUREMENT_ID);



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUser(user);
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                getDoc(userRef).then((userDoc)=>{
                  if (userDoc.exists()) {
                    setIsPremium(userDoc.data().isPremium || false);
                  }
                })

            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <ErrorBoundary>
            <AppRoutes user={user} setIsPremium={setIsPremium} isPremium={isPremium} />
            </ErrorBoundary>
        </div>
    );
};

export default App;