import React from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { firebaseConfig } from '../firebase';

const Login = () => {
    const navigate = useNavigate();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleLogin = async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/feed');
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };
    
    return (
        <div className="flex justify-center items-center h-screen bg-purple-100">
            <Card className="w-full max-w-sm">
                <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">GameLinked</h2>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input type="email" id="email" placeholder="Email" className="w-full p-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Password</label>
                    <input type="password" id="password" placeholder="Password" className="w-full p-2 border rounded-lg" />
                </div>
                <Button onClick={handleLogin} className="bg-purple-600 text-white w-full mb-2">LOGIN</Button>
                <Button onClick={() => navigate('/signup')} className="bg-gray-200 text-gray-800 w-full">REGISTER</Button>
            </Card>
        </div>
    );
};

export default Login;