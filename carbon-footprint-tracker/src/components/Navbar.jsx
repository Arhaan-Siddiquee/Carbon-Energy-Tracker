import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout, isLoggedIn }) => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Carbon Tracker</div>
      <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/about" className="mr-4 hover:underline">About</Link>
        <Link to="/services" className="mr-4 hover:underline">Services</Link>//fhwefbeb
        <Link to="/contact" className="mr-4 hover:underline">Contact</Link>
        {isLoggedIn ? (
          <Link to="/dashboard" className="mr-4 hover:underline">Profile</Link>
        ) : (
          <Link to="/login" className="mr-4 hover:underline">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
