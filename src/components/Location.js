import React from 'react';
import '../components/Location1.css';
import thiruvarur from './img/thiruvarur2.jpg';
import kumbakonam from './img/kumbakonam.jpg';
import thanjavur from './img/thanjur2.jpeg';
import trichy from './img/tricy.jpeg';
import chennai from './img/chennai.jpeg';
import mayailai from './img/mailai.jpeg';






const Location = () => {
  return (
   <>
     <header>
        <h1>Choose Your City</h1>
    </header>
    <main>
        <section class="city-selection">
            <h2>Select a City</h2>
            <div class="cities">
                <div class="city-card">
                    <img src={thiruvarur} alt="City Thumbnail"/>
                    <h3>THIRUVARUR</h3>
                </div>
                <div class="city-card">
                    <img src={chennai} alt="City Thumbnail"/>
                    <h3>CHENNAI</h3>
                </div>
                <div class="city-card">
                    <img src={thanjavur} alt="City Thumbnail"/>
                    <h3>THANJAVUR</h3>
                </div>
            </div>
        </section>
        <section class="city-selection">

            <div class="cities">
                <div class="city-card">
                    <img src={trichy} alt="City Thumbnail"/>
                    <h3>THIRICHIRAPALLI</h3>
                </div>
                <div class="city-card">
                    <img src={kumbakonam} alt="City Thumbnail"/>
                    <h3>KUMBOKONAM</h3>
                </div>
                <div class="city-card">
                    <img src={mayailai} alt="City Thumbnail"/>
                    <h4>MAYAILADUTHURAI</h4>
                </div>
            </div>
        </section>
    </main>
    <div className='footer1'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
   </>
  );
};

export default Location;