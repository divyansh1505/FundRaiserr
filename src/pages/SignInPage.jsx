
import React from 'react';
import '../styles/HomePage.css';

const SignInPage = () => {
  return (
    <div className="sign-in-body">
      <div class="container">
    <div className="sign-in-page">
      <h1>Sign In</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SignInPage;
