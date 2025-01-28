import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Instantly move the scroll position to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Use "instant" to avoid any animation
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page starts from the top on route change */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
