import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">SHBOOK</div>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="nav-links">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>HOME</Link>
        <Link to="/books" style={{ color: 'inherit', textDecoration: 'none' }}>BOOKS</Link>
        <Link to="/genres" style={{ color: 'inherit', textDecoration: 'none' }}>GENRE</Link>
        <span>SELL NOW</span>
      </div>
      <button className="login-btn">LOG IN</button>
    </div>
  );
};

export default Navbar;
