import React from 'react';

const campaigns = [
  { id: 1, title: 'Startup 1', image: './Images/start.png', description: 'Revolutionizing AI.', raised: '5000', goal: '10000' },
  { id: 2, title: 'Startup 2', image: './Images/start.png', description: 'Building green tech solutions.', raised: '2500', goal: '7500' },
  { id: 3, title: 'Startup 3', image: './Images/start.png', description: 'Innovating in health tech.', raised: '6000', goal: '12000' },
  { id: 4, title: 'Startup 4', image: './Images/start.png', description: 'Empowering local communities.', raised: '4000', goal: '9000' },
  { id: 5, title: 'Startup 5', image: './Images/start.png', description: 'Disrupting e-commerce.', raised: '3000', goal: '8000' },
  { id: 6, title: 'Startup 6', image: './Images/start.png', description: 'Pioneering clean energy.', raised: '7000', goal: '15000' },
];

const CampaignList = () => {
  return (
    <div className="campaigns-section">
      <h2>Featured Startups</h2>
      <div className="campaign-grid">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <img src={campaign.image} alt={campaign.title} className="campaign-image" />
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <button className="donate-button">Donate Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
