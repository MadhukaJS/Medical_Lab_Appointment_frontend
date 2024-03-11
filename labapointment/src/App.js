
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Appointment from './components/Appointment';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
