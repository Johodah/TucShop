import React from 'react';
import './Footer.css';
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
  return (
    <footer className="Footer">
      <SocialMediaLinks />
      <p className="Footer-text"></p>
    </footer>
  );
};

export default Footer;
