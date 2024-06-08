// src/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true); // State to switch between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'https://your-auth-api.com/login' : 'https://your-auth-api.com/signup';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error(`${isLogin ? 'Login' : 'Signup'} failed`);
      }

      const data = await response.json();
      console.log(`${isLogin ? 'Login' : 'Signup'} successful:`, data);
      navigate('/dashboard'); // Redirect to dashboard or another route after success
    } catch (error) {
      console.error(`Error during ${isLogin ? 'login' : 'signup'}:`, error);
    }
  };

  const toggleAuthMode = () => {
    navigate("/Login");
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <a onClick={toggleAuthMode}>
      {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
      </a>
    </div>
  );
};

export default SignUp;
