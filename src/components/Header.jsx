import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div id="head">FundRaiser</div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/donate">Donate</Link></div>
        <div><Link to="/about">About Us</Link></div>
        <div><Link to="/contacts">Contact</Link></div>
        <div id="sign">
        <Link to="/signin">
  <button id="in">Sign In</button>
</Link>
<Link to="/signup">
  <button id="up">Sign Up</button>
</Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;
