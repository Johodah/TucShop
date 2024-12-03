import React from 'react';
import './Footer.css';
import SocialMediaLinks from './SocialMediaLinks';
import PageLogoLink from './PageLogoLink'; 

const Footer = () => {
  return (
    <footer className="Footer">
      <PageLogoLink />
      <SocialMediaLinks />
      <p className="Footer-text"></p>
    </footer>
  );
};

export default Footer;
