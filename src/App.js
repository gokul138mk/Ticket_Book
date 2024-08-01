import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Booking from './components/BookingNow';
import Location from './components/Location';





import './App.css';

const App = () => {
  return (
    <>
    <Router>
      <div className='heading'>
        <h1>ᵀⁱᶜᵏᵉᵗ ᴮᵒᵒᵏⁱⁿᵍ ᴬᵖᵖ</h1>
      </div>
      <div >
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/" className='a'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='a'>About </Link>
            </li>
            <li>
              <Link to="/contact" className='a'>Contact</Link>
            </li>
            <li>
              <Link to="/login"className='a'>Login</Link>
            </li>
            <li>
              <Link to="/register"className='a'>Register</Link>
            </li>
            <li>
            <Link to="/booking"className='a'>Booking</Link>
            </li>
            <li>
            <Link to="/location"className='a'>Location</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/location" element={<Location/>} />
        </Routes>
       </div>
    </Router>
    </>
  );
};

export default App;