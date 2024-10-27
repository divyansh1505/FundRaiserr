import '../styles/HomePage.css';
import React from 'react';

const SignUp = () => {
  return (
    <div className="sign-up-body">
    <div class="container">
    <div className="sign-up-page">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="Name">Name:</label>
        <input type="Name" id="Name" required />
        
        <label htmlFor="DOB">DOB:</label>
        <input type="DOB" id="DOB" required />

        <label htmlFor="Email">Email:</label>
        <input type="Email" id="Email" required />

        <label htmlFor="Password">Password:</label>
        <input type="Password" id="Password" required />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SignUp;
