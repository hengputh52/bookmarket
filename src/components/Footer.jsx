import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>ADDRESS</h4>
        <p>123 Book Street</p>
        <p>Phnom Penh, Cambodia</p>
        <p>ZIP 12000</p>
      </div>

      <div className="footer-column">
        <h4>SOCIAL MEDIA</h4>
        <p><a href="#">Facebook</a></p>
        <p><a href="#">Instagram</a></p>
        <p><a href="#">Twitter</a></p>
      </div>

      <div className="footer-column">
        <h4>ABOUT US</h4>
        <p>SHBook is a platform where you can share and sell your favorite books with others.</p>
        <p>We connect book lovers across the country.</p>
      </div>

      <div className="footer-column">
        <h4>CONTACT</h4>
        <p>Email: support@shbook.com</p>
        <p>Phone: +855 12 345 678</p>
        <p>Support Hours: 9AM–6PM (Mon–Fri)</p>
      </div>
    </footer>
  );
};

export default Footer;
