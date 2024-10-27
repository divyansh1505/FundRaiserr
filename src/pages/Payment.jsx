import React, { useState } from 'react'


import '../styles/payment.css';

function Payment(){
  const[openPopup,setOpenPopup]=useState(false)


  return (
   
    
    <div className='contact' style={{
      backgroundImage: 'url("/purple.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
   
   <div className="contact-section">
     <div className="contact-left">
      <h7 className='h7'>WHY DONATE?</h7>
      <div className='underline2'></div>
      <img className='crowd' src="crowd.png"/>
       <p className='p2'>Donating to a crowdfunding website can be a powerful way to support innovative projects, social causes, and creative endeavors. By contributing, you help bring ideas to life, empower entrepreneurs, and make a tangible difference in the lives of individuals and communities in need.<br></br>
         Many campaigns offer unique perks or early access to products, creating a sense of connection between donors and creators. Additionally, crowdfunding platforms often provide transparency about how funds will be used, allowing you to see the direct impact of your support.<br></br>
          Ultimately, your donation fosters a sense of community and shared purpose, making you a vital part of the journey toward positive change and new possibilities.
       <br></br>
       </p>
      
  
     </div>
     <div className="contact-right">
     <div className='container'>
          <div className='header'>
            <div className='text'>Enter your details</div>
            
          </div>
          <div className='inputs'>
            <div className='input'>
              <label htmlFor='name1'>Your Name</label>
              
              <input
              id='name1' type='text' placeholder='Enter your name' name='name'/>
            <div className='input'>
              <label htmlFor='email1'>Your email</label>
              <input id='email1' type='email' placeholder='name@example.com' name='email'/>
              </div>
           
            <div className='input'>
            <label htmlFor='phone1'>Your phone number</label>
              <input id='phone1' type='number' placeholder='98765-23458' pattern='[0-9]{5}-[0-9]{5}' />
              </div>
            <div className='input'>
            <label htmlFor='donate'>Amount for donation</label>
              <input id='donate' type='number' placeholder='Amount you wish to donate'  />
              </div>
              <button className='submit1' type='submit' onClick={() => setOpenPopup(true)} >Proceed to pay</button>
           </div>
          </div>
         {
          openPopup &&
          <div className='f'>
          <div className="popup" id='popup'>
            <img src="404-tick.png"/>
            <h3>Thank You!</h3>
            <p> Donation is successful. Thank you for your kind donation.</p>
            <button className="ok" type='button' onClick={()=> setOpenPopup(false)}>OK</button>
          </div>
          </div>
}

          <div>
          <img className='donate' src="donate.png"/>
          
            <p className='rise'>We rise by lifting others!
           
            </p>
          </div>
 
      
      
          
         </div>
     </div>
   </div>
      
   </div>
   
  )
}


export default Payment