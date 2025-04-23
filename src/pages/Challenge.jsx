import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import axios from 'axios';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Challenge = ({ user }) => {
    const [scrims, setScrims] = useState([]);
    const [game, setGame] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('scrims')
            .onSnapshot(snapshot => {
                setScrims(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });
        
        return () => unsubscribe(); // Cleanup on component unmount
    }, []);

    const handleCreateScrim = async () => {
        if (!game || !ticketPrice) {
            alert('Please fill in all fields.');
            return;
        }

        await firebase.firestore().collection('scrims').add({
            creator: user.uid,
            game,
            ticketPrice: parseInt(ticketPrice),
            participants: [user.uid],
            status: 'pending',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setGame('');
        setTicketPrice('');
    };

    const handleJoinScrim = async (scrimId, ticketPrice) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment`, { amount: ticketPrice });
            
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY,
                amount: data.amount,
                currency: 'INR',
                name: 'GameLinked Scrim',
                description: 'Entry Fee for Scrim',
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
        } catch (error) {
            console.error('Error during payment:', error);
            alert('There was an error processing your payment.');
        }
    };

    return (
        <div className="p-4">
            <Card className="mb-4">
                <h3 className="font-bold">Create a Challenge</h3>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Game</label>
                    <input
                        type="text"
                        value={game}
                        onChange={(e) => setGame(e.target.value)}
                        placeholder="Select Game"
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Ticket Price (₹)</label>
                    <input
                        type="number"
                        value={ticketPrice}
                        onChange={(e) => setTicketPrice(e.target.value)}
                        placeholder="Set Price"
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <Button onClick={handleCreateScrim} className="bg-purple-600 text-white w-full">
                    Create Challenge
                </Button>
            </Card>

            <h3 className="font-bold mt-4">Active Scrims</h3>
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
