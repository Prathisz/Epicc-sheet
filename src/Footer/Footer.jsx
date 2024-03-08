// FooterComponent.js

import React from 'react';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import './FooterComponent.css'; // Import your CSS file for styling
import imgg from '../firstnav/coding.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="company-info">
        <img
          src={imgg}
          alt="Company Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        <h2>EPICC CODING </h2>
      </div>
      <div className="footer-links">
        <a href="#">Array Series</a>
        <a href="#">Graph Series</a>
        <a href="#">Tree Series</a>
      </div>
      <br></br>
      <div className="social-media">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
