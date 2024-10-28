import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div 
      className="contact" 
      style={{
        backgroundImage: 'url("/purple3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >  

<div id="wrap"> 
  <div>
    <h1 id="subtitle">Welcome To Our Website</h1>
  </div> 
  <div className="description">
    <h3>
      <p>
        We are an organization dedicated to helping aspiring entrepreneurs launch their startups by raising funds on our platform.
        <br />
        Our vision is to promote the growth of individuals and the nation. Join us on this journey to make dreams come true.
      </p>
    </h3>
    <a href="https://www.fundable.com/learn/resources/guides/crowdfunding/the-benefits-of-crowdfunding" target="_blank" rel="noopener noreferrer">
      <button class="read-more">READ MORE</button>
    </a> 
  </div>
</div>


      <section className="content-section">
        <h1 id="why" className="why-us">WHY US?</h1>

        <div className="features-container"> 

          <div className="feature-item">
            <img className="feature-image" src="img2.jpg" alt="24/7 Contact" />
            <div className="feature-text">
              <h3>24/7 CONTACT</h3>
              <p>FREE CONTACT AVAILABLE</p>
            </div>
          </div>
          
          <div className="feature-item">
            <img className="feature-image" src="img6.jpg" alt="Manage Tools" />
            <div className="feature-text">
              <h3>MANAGE TOOLS</h3>
              <p>EASY TO MANAGE TOOLS TO BOOST RESULTS</p>
            </div>
          </div>

          <div className="feature-item">
            <img className="feature-image" src="img5.jpg" alt="First Choice" />
            <div className="feature-text">
              <h3>FIRST CHOICE</h3>
              <p>SUPPORTED BY 55,000+ DONORS</p>
            </div>
          </div>

          <div className="feature-item">
            <img className="feature-image" src="img3.jpg" alt="Easy Withdrawal" />
            <div className="feature-text">
              <h3>EASY WITHDRAWAL</h3>
              <p>WITHDRAW FUNDS WITHOUT HASSLE</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default AboutUs;