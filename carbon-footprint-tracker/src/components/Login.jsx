import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email/password check, can be replaced by API call
    if (email === 'company@example.com' && password === 'password') {
      onLogin();
      navigate('/dashboard'); // Redirect to dashboard after login
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          className="border px-4 py-2 mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border px-4 py-2 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
