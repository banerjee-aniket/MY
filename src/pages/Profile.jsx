import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app'; // Import specific functions from firebase/app
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import specific functions from firebase/firestore
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { firebaseConfig } from '../firebase.js';

const Profile = ({ user }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const app = initializeApp(firebaseConfig);
       
    
        const db = getFirestore(app);

        if (user) {
            const userRef = doc(db, 'users', user.uid);

            getDoc(userRef).then((docSnap) => {
                if (docSnap.exists()) {
                    setProfile(docSnap.data());
                }
            }).finally(() => setLoading(false));
        } else {
            setLoading(false)
        }
    }, [user]);
     useEffect(() => {
    }, []);

    return loading ? <div>Loading...</div> :(
        <div className="p-4">
            <Card className="mb-4">
                <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                        <h2 className="text-xl font-bold">{profile.displayName}</h2>
                        <p className="text-gray-600">{profile.bio}</p>
                        <Button className="bg-purple-600 text-white mt-1">Edit Profile</Button>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="font-bold">Gaming Activity</h3>
                    <p>Games: {profile.games.join(', ') || 'None'}</p>
                    <p>K/D: {profile.stats.kd}</p>
                    <p>Win Rate: {profile.stats.winRate}%</p>
                    <p>Matches Played: {profile.stats.matches}</p>
                </div>
                <div className="mt-4">
                    <h3 className="font-bold">Clips</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {profile.clips.map((clip, index) => (
                            <div key={index} className="w-full h-24 bg-gray-300 rounded-lg"></div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Profile;