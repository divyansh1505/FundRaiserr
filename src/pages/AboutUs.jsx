import React from 'react'
import '../styles/AboutUs.css';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

function AboutUs() {
  return (
    
    
    <div className='contact'style={{
      backgroundImage: 'url("/purple3.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    <div className="contact-title"> 
     <h1>About Us</h1>
    </div>
   <div className="contact-section">
     <div className="contact-left">
      <h7 className='h7'>Welcome To Our Website</h7>
       <p className='p2'>We are an organisation trying to help people who want to launch their startup. We help people to build their startup dreams by raising funds on our website. We want people to have a medium to help them fullfill their dreams. Our <strong>Vision</strong> is to see growth of not just people but growth of country as well. Would you like to join this beautiful journey and help us all?
       <br></br>
       <a href="https://www.fundable.com/learn/resources/guides/crowdfunding/the-benefits-of-crowdfunding" target="_blank">
       <button className='read'>READ MORE</button>
       </a>
      </p>
      
  
     </div>
     <div className="contact-right">
       <img src='about.jpeg'/>
     </div>
   </div>
   
   
   


 <section className='content2'>
  <div>
    <h1 className='why'>WHY US?</h1>
    <ul><li className='aboutitem'>
      <img src="img2.jpg"/>
      <div className='style.itemtext'>
        <h2 className='h2'> 24/7 CONTACT</h2>
        <p className='p1' >FREE CONTACT AVAILABLE</p>
      </div>
      </li>
     
        <li className='aboutitem'>
          <img src="img6.jpg"/>
          <div className='style.itemtext'>
            <h4 className='h4'>MANAGE TOOLS</h4>
           <p className='p4'>EASY TO  MANAGE TOOLS TO BOOST RESULTS</p>
          </div>
          <li className='aboutitem'>
          <img className='imgg' src="img5.jpg"/>
          <div className='style.itemtext'>
            <h5 className='h5'>FIRST CHOICE</h5>
           <p className='p5'>SUPPORTED BY 55,000+ DONORS</p>
          </div>
          </li>
          <li className='aboutitem'>
          <img src="img3.jpg"/>
          <div className='style.itemtext'>
            <h6 className='h6'>EASY WITHDRAWAL</h6>
           <p className='p3'>WITHDRAW FUNDS WITHOUT HASSLE</p>
        
          </div>
          </li>
        
      
      </li></ul>
    
   

  </div>


 

 </section>
 <Footer/>

</div>


  )
  }

export default AboutUs