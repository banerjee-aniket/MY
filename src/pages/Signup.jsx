import React from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import Card from '../components/common/Card';
import { app, auth, db } from '../firebase';

const Signup = () => {
    const navigate = useNavigate();
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleRegister = async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            const userDocRef = doc(db, 'users', user.uid);
            await setDoc(userDocRef, {
              displayName: email.split('@')[0],
              bio: 'Gamer',
              games: [],
              stats: {
                kd: 0,
                winRate: 0,
                matches: 0,
              },
              clips: [],
              points: 0,
              isPremium: false,
            });
            navigate('/feed');
        } catch (error) {
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-purple-100">
            <Card className="w-full max-w-sm">
                <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input type="email" id="email" placeholder="Email" className="w-full p-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Password</label>
                    <input type="password" id="password" placeholder="Password" className="w-full p-2 border rounded-lg" />
                </div>
                <Button onClick={handleRegister} className="bg-purple-600 text-white w-full mb-2">SIGN UP</Button>
                <Button onClick={() => navigate('/login')} className="bg-gray-200 text-gray-800 w-full">BACK TO LOGIN</Button>
            </Card>
        </div>
    );
};

export default Signup;