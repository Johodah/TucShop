import React from 'react';
import './Modules/Footer.css';
import SocialMediaLinks from './Modules/SocialMediaLinks';
import PageLogoLink from './Modules/PageLogoLink'; 
import LinkToServicesFooter from './Modules/LinkToServicesFooter';

const Footer = () => {
  return (
    <footer className="Footer">
      <PageLogoLink />
      <SocialMediaLinks />
      <LinkToServicesFooter />
      <p className="Footer-text"></p>
    </footer>
  );
};

export default Footer;
