// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Corrected import

import '../index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        
        <img src="/Users/SpeedySponge/Repositories/e-commerce-app/public/Images/Logo no BG.png" alt="Company Logo" className="footer-logo" />
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="contact-info">
          <p>Company Name</p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Your Company Address
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Phone: Your Phone Number
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email: your.email@example.com
          </p>
          <p>
            <FontAwesomeIcon icon={faGlobe} /> Website: www.yourwebsite.com
          </p>
        </div>
        
        <div className="map-container">
          {/* Add your Google Maps component or embed code here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
