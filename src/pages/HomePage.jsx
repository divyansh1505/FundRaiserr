import React from 'react';
import Header from '../components/Header';
import CampaignList from '../components/CampaignList';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div>
      
      <main>
        <section className="hero-section">
          <div className="text-slide">
            <h1>Welcome to FundRaiser</h1>
            <p>Support businesses you believe in</p>
            <button id="but">Purchase Shares</button>
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
