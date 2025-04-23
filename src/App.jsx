import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app, auth, db } from './firebase';


import AppRoutes from './routes/AppRoutes';
import './styles/index.css';



const App = () => {
     const [user, setUser] = useState(null);
    const [isPremium, setIsPremium] = useState(false);

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
            <AppRoutes user={user} setIsPremium={setIsPremium} isPremium={isPremium} />
        </div>
    );
};

export default App;