import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div className="bg-purple-800 text-white flex justify-around py-3 fixed bottom-0 w-full">
        <Link to="/feed" className="focus:outline-none">🏠 Home</Link>
        <Link to="/profile" className="focus:outline-none">👤 Profile</Link>
        <Link to="/leaderboard" className="focus:outline-none">🔍 Search</Link>
        <Link to="/messages" className="focus:outline-none">💬 Messages</Link>
        <Link to="/premium" className="focus:outline-none">⚙️ Settings</Link>
    </div>
);

export default Navbar;