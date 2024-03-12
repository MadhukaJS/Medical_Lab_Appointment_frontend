import React, { useState, useEffect } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useLocation } from 'react-router';

function Dashboard() {
  const [open, setOpen] = useState('');
  const [inprogress, setInprogress] = useState('');
  const [repair, setRepair] = useState('');
  const [closed, setClosed] = useState('');

  const location = useLocation();
  const roleid = location.state;
  
  const variant = ['danger', 'info', 'warning', 'success'];
  const titles = ['Total Complains', 'Total Reviewed Cases', 'Total on Repair cases', 'Total Reslove Cases'];
  const numbers = [open, inprogress, repair, closed];
  const iconlist = ['fas fa-exclamation', 'fas fa-user-check', 'fas fa-wrench', 'fas fa-check'];

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow-1">
        <Topbar
          roleid={roleid}
         />
        <div className="p-4 mt-5">
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
