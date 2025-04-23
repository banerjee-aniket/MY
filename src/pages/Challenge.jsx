import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import axios from 'axios';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Challenge = ({ user }) => {
    const [scrims, setScrims] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('scrims')
            .onSnapshot(snapshot => {
                setScrims(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });
    }, []);

    const handleCreateScrim = async () => {
        const game = document.getElementById('scrimGame').value;
        const ticketPrice = parseInt(document.getElementById('ticketPrice').value);
        await firebase.firestore().collection('scrims').add({
            creator: user.uid,
            game,
            ticketPrice,
            participants: [user.uid],
            status: 'pending',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    };

    const handleJoinScrim = async (scrimId, ticketPrice) => {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment`, { amount: ticketPrice });
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: data.amount,
            currency: 'INR',
            name: 'GameLinked Scrim',
            description: ' ocorrer Entry Fee',
            order_id: data.id,
            handler: async () => {
                await firebase.firestore().collection('scrims').doc(scrimId).update({
                    participants: firebase.firestore.FieldValue.arrayUnion(user.uid),
                    status: 'active'
                });
                alert('Scrim joined!');
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <><div className="p-4">
            <Card className="mb-4">
                <h3 className="font-bold">Create a Challenge</h3>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Game</label>
                    <input type="text" id="scrimGame" placeholder="Select Game" className="w-full p-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Ticket Price (₹)</label>
                    <input type="number" id="ticketPrice" placeholder="Set Price" className="w-full p-2 border rounded-lg" />
                </div>
                <Button onClick={handleCreateScrim} className="bg-purple-600 text-white w-full">Create Challenge</Button>
            </></div><h3 className="font-bold">Active Scrims</h3></>
            {scrims.map(scrim => (
                <Card key={scrim.id} className="mb-2">
                    <p>Game: {scrim.game}</p>
                    <p>Ticket: ₹{scrim.ticketPrice}</p>
                    <Button
                        onClick={() => handleJoinScrim(scrim.id, scrim.ticketPrice)}
                        className="bg-purple-600 text-white"
                    >
                        Join Scrim
                    </Button>
                </Card>
            ))}
        </div>
    );
};

export default Challenge;