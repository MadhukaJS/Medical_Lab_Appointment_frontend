import React, { useState } from 'react';
import './style.css';
import backgroundImage from './background.jpg';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { username, password, firstName, lastName, contactNumber });
    // Reset form fields
    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setContactNumber('');
    setMessage('Signup request submitted successfully!');
  };

  return (
    <div className="signup-container" style={{ backgroundImage: `url(${backgroundImage})`, justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h2 style={{ color: '#00264d', textAlign: 'center', marginTop: '10%' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" style={{ color: '#00264d', display: 'block', marginBottom: '8px', textAlign: 'left' }}>Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="form-group">
            <label htmlFor="firstName" style={{ color: '#00264d', display: 'block', marginBottom: '8px', textAlign: 'left' }}>First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" style={{ color: '#00264d', display: 'block', marginBottom: '8px', textAlign: 'left' }}>Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber" style={{ color: '#00264d', display: 'block', marginBottom: '8px', textAlign: 'left' }}>Contact Number:</label>
            <input
              type="tel"
              className="form-control"
              id="contactNumber"
              placeholder="Enter your contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
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

export default Signup;
