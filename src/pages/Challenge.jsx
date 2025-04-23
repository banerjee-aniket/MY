import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs, addDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import axios from 'axios';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { db } from '../firebase.js';

const Challenge = ({ user }) => {
    const [scrims, setScrims] = useState([]);
    const [game, setGame] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScrims = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'scrims'));
                setScrims(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                alert('Error fetching scrims: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchScrims();
    }, []);

    const handleCreateScrim = async () => {
        if (!game || !ticketPrice) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            await addDoc(collection(db, 'scrims'), {
                creator: user.uid,
                game,
                ticketPrice: parseInt(ticketPrice),
                participants: [user.uid],
                status: 'pending',
                timestamp: serverTimestamp(),
            });
            setGame('');
            setTicketPrice('');
        } catch (error) {
            alert('Error creating scrim: ' + error.message);
        }
    };

    const handleJoinScrim = async (scrimId, ticketPrice) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment`, { amount: ticketPrice });

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY,
                amount: data.amount,
                currency: 'INR',
                name: "GameLinked Scrim",
                description: "Entry Fee for Scrim",
                order_id: data.id,
                handler: async () => {
                    try {
                        await updateDoc(doc(db, 'scrims', scrimId), {
                            participants: arrayUnion(user.uid),
                            status: "active"
                        });
                    alert("Scrim joined!");
                    } catch (error) {
                        alert('Error joining scrim: ' + error.message);
                }
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            alert('Error during payment: ' + error.message);
        }
    };
    return loading ? <div>Loading...</div> : (
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
    )

};

export default Challenge;