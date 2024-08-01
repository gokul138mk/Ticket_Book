import React from 'react';
import Death from './img/death.avif'
import raayan  from './img/raayan.avif'
import indian  from './img/indian2.webp'


import './Booking1.css';

const booking = () => {
  return (
   <>
      <header>
        <h1>Thailammai Multiplex</h1>
        <p> 4K Dolby Atmos 2D & 3D</p>
        <p>KTR Nagar, Thiruvarur</p>
    </header>
    <main>
        <section className="movie-details">
            <h2>Now Showing</h2>
            <div class="movie-info">
                <img src={Death} alt="Movie Poster" class="movie-poster"/>
                <div class="details">
                    <button className='but'><strong>AUG</strong></button>
                    <button className='buttons'>1 Thu</button>
                    <button className='buttons'>2 Fri</button>
                    <button className='buttons'>3 Sat</button>
                    <button className='buttons'>4 Sun</button>
                    <h3>Movie : DEATHPOOL & WOLVERINE </h3>
                    <button className='time'>❤ 88%</button>
                    <p><strong>Showtimes :</strong> <button className='show-time'>11:00 AM </button><button className='show-time'>2:00 PM </button><button className='show-time'>6:00 PM </button><button className='show-time'>10:00 PM </button></p>
                    <p><strong>Screen : 1 </strong></p>
                    <p><strong>Lanuge : Tamil  </strong></p>
                    <section className="booking">
                      <a href="#" class="btn">Book Now</a>
                     </section>
                </div>
            </div>
        </section>
        <section className="movie-details">
            <h2>Now Showing</h2>
            <div class="movie-info">
                <img className="img" src={raayan} alt="Movie Poster" class="movie-poster"/>
                <div class="details">
                    <button className='but'><strong>AUG</strong></button>
                    <button className='buttons'>1 Thu</button>
                    <button className='buttons'>2 Fri</button>
                    <button className='buttons'>3 Sat</button>
                    <button className='buttons'>4 Sun</button>
                    <h3>Movie : RAAYAN </h3>
                    <button className='time'>❤ 89%</button>
                    <p><strong>Showtimes :</strong> <button className='show-time'>11:15 AM </button><button className='show-time'>2:30 PM </button><button className='show-time'>6:15 PM </button><button className='show-time'>10:25 PM </button></p>
                    <p><strong>Screen : 2 </strong></p>
                    <p><strong>Lanuge : Tamil  </strong></p>
                    <section className="booking">
                      <a href="#" class="btn">Book Now</a>
                     </section>
                </div>
            </div>
        </section>
    <section className="movie-details">
            <h2>Now Showing</h2>
            <div class="movie-info">
                <img className="img" src={indian} alt="Movie Poster" class="movie-poster"/>
                <div class="details">
                    <button className='but'><strong>AUG</strong></button>
                    <button className='buttons'>1 Thu</button>
                    <button className='buttons'>2 Fri</button>
                    <button className='buttons'>3 Sat</button>
                    <button className='buttons'>4 Sun</button>
                    <h3>Movie : INDIAN 2 </h3>
                    <button className='time'>❤ 89%</button>
                    <p><strong>Showtimes :</strong> <button className='show-time'>10:45 AM </button><button className='show-time'>1:45 PM </button><button className='show-time'>5:45 PM </button><button className='show-time'>9:45 PM </button></p>
                    <p><strong>Screen : 2 </strong></p>
                    <p><strong>Lanuge : Tamil  </strong></p>
                    <section className="booking">
                      <a href="#" class="btn">Book Now</a>
                     </section>
                </div>
            </div>
        </section>
    </main>
    <footer className="footer">
        <p>&copy; 2024 TicketBook. All rights reserved. created by Gokul</p>
      </footer>
   </>
  );
};

export default booking;
