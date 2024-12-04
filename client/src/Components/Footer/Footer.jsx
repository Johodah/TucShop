import React from 'react';
import './Footer.css';
import SocialMediaLinks from './SocialMediaLinks';
import PageLogoLink from './PageLogoLink'; 
import LinkToServicesFooter from './LinkToServicesFooter';

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
