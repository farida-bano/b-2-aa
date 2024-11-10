import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="text-center">
        <nav className="p-6 bg-gray-800 text-white text-sm md:text-lg">
          <Link to="/" className="mx-3 hover:text-blue-300">Home</Link>
          <Link to="/about" className="mx-3 hover:text-green-300">About</Link>
          <Link to="/contact" className="mx-3 hover:text-yellow-300">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
