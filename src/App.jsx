import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';


import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './utils/ErrorBoundary';



const App = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
     const [user, setUser] = useState(null);
    const [isPremium, setIsPremium] = useState(false);


    useEffect(() => {
        setLoading(true);
        setError(null);
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUser(user);
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                getDoc(userRef)
                    .then((userDoc) => {
                  if (userDoc.exists()) {
                    setIsPremium(userDoc.data().isPremium || false);
                    
                  }
                    })
                    .catch((err) => {
                        setError('Error loading user data');
                        console.error('Error loading user data:', err);
                    })
                    .finally(() => {
                    setLoading(false);
                });

            }
        });

        return () => unsubscribe();
    }, []);

    return (<div className="min-h-screen bg-gray-100">
        {loading && <div className="flex justify-center items-center h-screen"><p>loading...</p></div>}
        {error && <div className="flex justify-center items-center h-screen"><p>{error}</p></div>}
        {!loading && !error && (
            <ErrorBoundary>
            <AppRoutes user={user} setIsPremium={setIsPremium} isPremium={isPremium} />
            </ErrorBoundary>
        )}
    </div>
    );
};

export default App;