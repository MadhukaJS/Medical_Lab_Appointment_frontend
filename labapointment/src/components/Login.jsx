import React, { useState } from 'react';
import './style.css';
import backgroundImage from './background.jpg';

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { usernameOrEmail, password });
    // Reset form fields
    setUsernameOrEmail('');
    setPassword('');
    setMessage('Login request submitted successfully!');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h2 style={{ color: '#00264d', textAlign: 'center', marginTop: '10%' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usernameOrEmail" style={{ color: '#00264d', display: 'block', marginBottom: '8px', textAlign: 'left' }}>Username or Email:</label>
            <input
              type="text"
              className="form-control"
              id="usernameOrEmail"
              placeholder="Enter your username or email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: '#00264d', display: 'block', marginBottom: '8px', textAlign: 'left' }}>Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {message && <div className="alert alert-success mt-3">{message}</div>}
      </div>
    </div>
  );
}

export default Login;
