
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Appointment from './components/Appointment';
import VisitorDashboard from './components/appointment/VisitorDashboard';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/VisitorDashboard" element={<VisitorDashboard />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
