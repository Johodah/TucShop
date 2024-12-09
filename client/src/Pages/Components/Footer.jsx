import React from 'react';
import './Modules/Footer.css';
import SocialMediaLinks from './Modules/SocialMediaLinks';
import Logo from "./Modules/Logo";
import LinkToServicesFooter from './Modules/LinkToServicesFooter';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="page-logo">
      <Logo />
      </div>
      <SocialMediaLinks />
      <LinkToServicesFooter />
    </footer>
  );
};

export default Footer;
