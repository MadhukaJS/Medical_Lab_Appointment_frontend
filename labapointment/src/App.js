
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './admin/Dashboard';
import Appointment from './components/Appointment';
import VisitorDashboard from './components/appointment/VisitorDashboard';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/dashboard" element={<VisitorDashboard />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />

        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
