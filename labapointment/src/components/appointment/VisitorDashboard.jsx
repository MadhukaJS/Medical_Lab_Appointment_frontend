import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import './dashboard.css';

const VisitorDashboard = () => {
  return (
    <div className="dashboard-container" style={{backgroundImage: 'url("")'}}>

      <div className="content-container">
        <h1>Welcome</h1>
        <div className="dashboard-cards">
          <div className="card">
            <h3>My Appointments</h3>
            <p>View and manage your appointments here.</p>
            {/* Use Link to navigate to the Appointments component */}
            <Link to="/my-appointments" className="btn btn-primary">View Appointments</Link>
          </div>
          <div className="card">
            <h3>Lab Reports</h3>
            <p>View and update your profile information.</p>
            {/* Add routing logic for the "View Profile" button */}
            <Link to="/profile" className="btn btn-primary">View Profile</Link>
          </div>
          <div className="card">
            <h3>Logout</h3>
            <p>Logout from your account.</p>
            {/* Add routing logic for the "Logout" button */}
            <Link to="/logout" className="btn btn-primary">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDashboard;
