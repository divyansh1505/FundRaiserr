import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <div className="contact-component-xyz-container">
            <h2 className="contact-component-xyz-heading"> Let's Grow your <br /> &emsp;&emsp;&emsp;&emsp;&emsp; personal presence.</h2>

            <div className="contact-component-xyz-content-box">
                <h4 className="contact-component-xyz-subheading"> If you are ready to get started, get in touch with us! 👇 </h4>
                <br />
                <hr className='contact-component-xyz-divider-top' />
                <p className="contact-component-xyz-paragraph"> Hi!👋 what's your name ?</p>

                <div className="contact-component-xyz-form-container">
                    <input type="text" placeholder="Name" className="contact-component-xyz-form-input" />
                    <input type="text" placeholder="Company" className="contact-component-xyz-form-input" />
                    <input type="text" placeholder="Email" className="contact-component-xyz-form-input" />
                </div>

                <br />
                <div></div>

                <button type="button" className="contact-component-xyz-button">Next</button>
            </div>
        </div>
    );
}
