import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Profile = ({ user }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (user) {
            firebase.firestore().collection('users').doc(user.uid).get().then(doc => {
                if (doc.exists) setProfile(doc.data());
            });
        }
    }, [user]);

    if (!profile) return <div>Loading...</div>;

    return (
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