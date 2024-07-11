import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
    <header>
      <div className="logo">LOGO</div>
      
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">SignUp</button>
      </div>
    </header>
      <nav>
        <li>Overview </li>
        <li>Curriculum</li>
        <li>Refund</li>
        <li>Testimonial</li>
      </nav>
      </>
  );
};

export default Header;
