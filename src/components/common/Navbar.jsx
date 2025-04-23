
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-purple-600 text-white p-4">
            <div className="container mx-auto flex justify-around items-center">
                <Link to="/feed" className="hover:text-purple-200">Feed</Link>
                <Link to="/challenge" className="hover:text-purple-200">Challenge</Link>
                <Link to="/profile" className="hover:text-purple-200">Profile</Link>
                <Link to="/leaderboard" className="hover:text-purple-200">Leaderboard</Link>
                <Link to="/messages" className="hover:text-purple-200">Messages</Link>
                <Link to="/premium" className="hover:text-purple-200">Premium</Link>
            </div>
        </nav>
    );
};

export default Navbar;
