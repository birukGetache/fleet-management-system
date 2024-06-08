import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const response = await axios.post('http://localhost:3000/', { 
        email,
        password
      });

      if (response.status !== 200) {
        throw new Error('Login failed');
      }
      console.log("you are corrected but no one can help you");
      navigate('/Dashboard'); 
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  const handleSignupRedirect = () => {
    navigate('/SignUp');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <a onClick={handleSignupRedirect}>Sign Up</a>
    </div>
  );
};

export default Login;
