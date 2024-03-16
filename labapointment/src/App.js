
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './admin/Dashboard';
import Appointment from './components/Appointment';
import VisitorDashboard from './components/appointment/VisitorDashboard';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Appointments from './admin/Appointments';
import MyAppointments from './components/MyAppointments';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<VisitorDashboard />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/my-appointments" element={<MyAppointments />} />

        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
