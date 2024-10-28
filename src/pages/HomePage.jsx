import React from 'react';
import CampaignList from '../components/CampaignList';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      
      <main>
        <section className="hero-section">
          <div className="text-slide">
            <h1>Welcome to FundRaiser</h1>
            <p>Support businesses you believe in</p>
            <Link to="/donate">
            <button id="but">Start Donating</button>
            </Link>
          </div>
          <div id="pic1">
            {/* Add an image or content you want to animate */}
          </div>
        </section>
        <CampaignList />
      </main>
    </div>
  );
};

export default HomePage;
