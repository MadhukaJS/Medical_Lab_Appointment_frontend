import React from "react";

import './dashboard.css';


const VisitorDashboard = () => {
  return (
    <div className="dashboard-container" style={{backgroundImage: 'url("")'}}>

      <div className="content-container">
        <h1>Welcome, Visitor!</h1>
        <div className="dashboard-cards">
          <div className="card">
            <h3>My Appointments</h3>
            <p>View and manage your appointments here.</p>
            <button className="btn btn-primary">View Appointments</button>
          </div>
          <div className="card">
            <h3>Visitor Profile</h3>
            <p>View and update your profile information.</p>
            <button className="btn btn-primary">View Profile</button>
          </div>
          <div className="card">
            <h3>Logout</h3>
            <p>Logout from your account.</p>
            <button className="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDashboard;
