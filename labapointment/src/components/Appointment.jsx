import React, { useState } from 'react';
import './style.css';

function Appointment() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation here if needed
    // Submit form data to backend or perform other actions
    console.log('Form submitted:', { fullName, email, phone, appointmentDate });
    // Reset form fields
    setFullName('');
    setEmail('');
    setPhone('');
    setAppointmentDate('');
    setMessage('Appointment request submitted successfully!');
  };

  return (
    <div>
      <h2 style={{ color: '#00264d' }}>Make an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName" style={{ color: '#00264d' }}>Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{ color: '#00264d' }}>Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" style={{ color: '#00264d' }}>Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate" style={{ color: '#00264d' }}>Appointment Date:</label>
          <input
            type="date"
            className="form-control"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}

export default Appointment;
