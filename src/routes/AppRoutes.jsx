import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { getFirestore,  doc, updateDoc } from 'firebase/firestore';
import { getDatabase, ref,  onValue, push,orderByChild} from 'firebase/database';
import {app,database, db} from '../firebase'
 
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Challenge from '../pages/Challenge';
import Feed from '../pages/Feed';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Navbar from '../components/common/Navbar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Leaderboard = () => (
    <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between mb-4">
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">Sort by Rank</button>
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">Sort by Points</button>
            </div>
            {[1, 2, 3].map((rank, index) => (
                <div key={index} className="flex items-center mb-2">
                    <p className="font-bold mr-2">{rank}.</p>
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
                    <p>Player {rank} - {1500 - rank * 100} Points</p>
                </div>
            ))}
        </div>
    </div>
);

const Premium = ({ user, setIsPremium }) => {
    const handleSubscribe = async () => {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment`, { amount: 99 });
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: data.amount,
           
            currency: 'INR',
            name: 'GameLinked Premium',
            description: 'Premium Subscription',
            order_id: data.id,
            handler: async () => {
               
                const userRef = doc(db, 'users', user.uid);
             
                await updateDoc(userRef, { isPremium: true });
                setIsPremium(true);
                alert('Subscribed to Premium!');
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Premium Subscription</h2>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="font-bold">Upgrade to Premium</h3>
                <ul className="list-disc list-inside my-4">
                    <li>No Ads</li>
                    <li>Verified Status</li>
                    <li>Exclusive Challenges</li>
                </ul>
                <button onClick={handleSubscribe} className="w-full bg-purple-600 text-white p-2 rounded-lg">
                    Subscribe Now (₹99/month)
                </button>
            </div>
        </div>
    );
};

const Messages = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const chatsRef = ref(database, 'chats');
        const query = orderByChild(chatsRef,`participants/${user.uid}`);
        const unsubscribe = onValue(chatsRef, (snapshot) => {
          const chats = [];
          snapshot.forEach((child) => {
            const chat = {
              id: child.key,
              ...child.val(),

            };
            chats.push(chat);
          });
          setMessages(chats);
            });

        return () => unsubscribe();
    }, [user]);

    useEffect(() => {
        if (!selectedChat) return;
        const messageRef = ref(database, `messages/${selectedChat.id}`);
        const unsubscribe = onValue(messageRef, (snapshot) => {
          const msgs = [];
          snapshot.forEach(child => {
            msgs.push(child.val());
          });
          setChatMessages(msgs);
        });
        return () => unsubscribe();
    }, [selectedChat]);
   

    const handleSendMessage = async () => {
        const message = document.getElementById('messageInput').value;
        if (!selectedChat) return;
         await push(ref(database,`messages/${selectedChat.id}`),{
            sender: user.uid,
            content: message,
            timestamp: Date.now()
        });
        document.getElementById('messageInput').value = '';
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Messages</h2>
            
            <div className="flex">
                <div className="w-1/3 bg-white rounded-lg shadow-lg p-4 mr-4">
                    {messages.map(chat => (
                        <div
                            key={chat.id}
                            onClick={() => setSelectedChat(chat)}
                            className="p-2 border-b cursor-pointer"
                        >
                           {Object.keys(chat.participants).find(id => id !== user.uid) && <p>{Object.keys(chat.participants).find(id => id !== user.uid)}</p> }
                        </div>
                    ))}
                </div>
                <div className="w-2/3 bg-white rounded-lg shadow-lg p-4">
                    {selectedChat ? (
                        <>
                            <h3 className="font-bold mb-2">{Object.keys(selectedChat.participants).find(id => id !== user.uid)}</h3>
                            <div className="h-64 overflow-y-scroll mb-4">
                                {chatMessages.map((msg, index) => (
                                    <div key={index} className={`p-2 ${msg.sender === user.uid ? 'text-right' : ''}`}>
                                             <p className={`inline-block p-2 rounded-lg ${msg.sender === user.uid ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                                            {msg.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex">
                                <input id="messageInput" type="text" placeholder="Type a message..." className="w-full p-2 border rounded-lg mr-2" />
                                <button onClick={handleSendMessage} className="bg-purple-600 text-white px-3 py-2 rounded-lg">Send</button>
                            </div>
                        </>
                    ) : (
                        <p>Select a chat to start messaging</p>
                    )}
                </div>
            </div>
        </div>
        
    );
};

const AppRoutes = ({ user, setIsPremium, isPremium }) => {
    const AdBanner = () => (
        !isPremium && (
            <div className="bg-purple-200 p-2 text-center text-purple-800">
                <p>🎮 Upgrade to Premium to remove ads!</p>
            </div>
        )
    );

    return (
        <Router>
            <AdBanner />
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile user={user} />} />
                <Route path="/challenge" element={<Challenge user={user} />} />
                <Route path="/feed" element={<Feed user={user} />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/premium" element={<Premium user={user} setIsPremium={setIsPremium} />} />
                <Route path="/messages" element={<Messages user={user} />} />
                <Route path="/" element={<Login />} />
            </Routes>
            {user && <Navbar />}
            <Footer />
        </Router>
    );
};

export default AppRoutes;