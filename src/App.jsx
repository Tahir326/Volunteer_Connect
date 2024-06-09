import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Homepage from './Components/Homepage.jsx';
import Event from './Components/Event.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Event />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
