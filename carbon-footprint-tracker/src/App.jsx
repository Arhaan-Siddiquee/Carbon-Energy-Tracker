import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'; // Add Profile component for the dashboard

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <nav className="bg-black p-4 flex justify-between items-center">
        <h1 className="text-white text-xl">Carbon Tracker</h1>
        <div className="flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/signup" className="text-white">Sign Up</Link>
              <Link to="/login" className="text-white">Login</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-white">Dashboard</Link>
              <Profile onLogout={handleLogout} /> {/* Profile component to trigger logout */}
            </>
          )}
        </div>
      </nav>

      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Private Route for Dashboard */}
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
