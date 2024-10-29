import React, { useState } from 'react';
import '../styles/payment.css';

function Payment() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className='contact' style={{
      backgroundImage: 'url("/purple.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="contact-section">
        <div className="contact-left">
          <h2 className='h2'>WHY DONATE?</h2>
          <div className='underline2'></div>
          <img className='crowd' id="pic" src="crowdd.jpg" alt="Crowd" />
          <p className='p2'>
            Donating to a crowdfunding website can be a powerful way to support innovative projects, social causes, and creative endeavors. By contributing, you help bring ideas to life, empower entrepreneurs, and make a tangible difference in the lives of individuals and communities in need.
            <br />
            Many campaigns offer unique perks or early access to products, creating a sense of connection between donors and creators. Additionally, crowdfunding platforms often provide transparency about how funds will be used, allowing you to see the direct impact of your support.
            <br />
            Ultimately, your donation fosters a sense of community and shared purpose, making you a vital part of the journey toward positive change and new possibilities.
            <br />
          </p>
        </div>

        <div className="contact-right">
          <div className='container'>

            <div className='header'>
              <div className='text' id='EYD'>Enter your details</div>
            </div>

            <div className='inputs'>
              <div className='input'>
                
                <input id='name1' type='text' placeholder='Enter your name' name='name' />
              </div>

              <div className='input'>
                
                <input id='email1' type='email' placeholder='name@example.com' name='email' />
              </div>

              <div className='input'>
               
                <input id='phone1' type='text' placeholder='XXXYY-YYXXX' pattern='[0-9]{5}-[0-9]{5}' />
              </div>

              <div className='input'>
                
                <input id='donate' type='number' placeholder='Amount you wish to donate' />
              </div>

              <div className='input'>
                
                <input id='choose' type='number' placeholder='Choose a startup' />
              </div>

              <button className='submit1' type='submit' onClick={() => setOpenPopup(true)}>Proceed to Pay</button>
            </div>
          </div>

          {openPopup && (
            <div className='f'>
              <div className="popup" id='popup'>
                <img src="404-tick.png" alt="Success" />
                <h3>Thank You!</h3>
                <p>Your donation is successful. Thank you for your kind support.</p>
                <button className="ok" type='button' onClick={() => setOpenPopup(false)}>OK</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Payment;
