import React from 'react';
import './Home.css';
import secure from './img/secure2.png'
const Home = () => {
  return (
  <>
  <section className="hero">
        <div className="hero-content">
          <h1>Book Your Tickets with Ease</h1>
          <p>Find and book tickets for movies, events, and more—all in one place.</p>
          <a href="#cta" className="btn-primary">Get Started</a>
        </div>
      </section>

      <section id="features" className="features">
        <div className="feature">
          <h2>Easy Booking</h2>
          <p>Quick and simple booking process for all your ticket needs.</p>
        </div>
        <div className="feature">
          <h2>Real-time Availability</h2>
          <p>Check real-time availability and choose your preferred seats.</p>
        </div>
        <div className="feature">
          <h2>Secure Payments</h2>
          <img className='secure-img' src={secure}/>
          <p>Enjoy secure transactions with various payment options.</p>
        </div>
      </section>

      <section id="cta" className="cta">
        <h2>Ready to Book?</h2>
        <button className="btn-primary">Start Booking</button>
      </section>

      <footer className="footer">
        <p>&copy; 2024 TicketBook. All rights reserved. created by Gokul</p>
      </footer>

  </>
  );
};

export default Home;