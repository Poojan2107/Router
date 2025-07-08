import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './App.css';


function App() {
  return (
    <div>
      <nav className="mb-4">
        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="text-primary fw-semibold text-decoration-none">Home</Link>
          <Link to="/about" className="text-primary fw-semibold text-decoration-none">About</Link>
          <Link to="/contact" className="text-primary fw-semibold text-decoration-none">Contact</Link>
          <Link to="/services" className="text-primary fw-semibold text-decoration-none">Services</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App
