import React from 'react';
import './Footer.css';
import tiktokLogo from '../../Images/tiktok-logo.png';
import youtubeLogo from '../../Images/youtube-logo.png';
import linkedinLogo from '../../Images/linkedin-logo.png';
import instagramLogo from '../../Images/instagram-logo.png';
import facebookLogo from '../../Images/facebook-logo.png';

const SocialMediaLinks = () => {
  return (
    <div className = "SocialMediaLogoContainer">
      <a href="https://www.tiktok.com/discover/tuc-h%C3%B6gskola-j%C3%B6nk%C3%B6ping" target="_blank">
        <img src={tiktokLogo} alt="Tiktok" className="SocialMedia-logo" />
      </a>
      <a href="https://www.youtube.com/user/TUCtelevision" target="_blank">
        <img src={youtubeLogo} alt="Youtube" className="SocialMedia-logo" />
      </a>
      <a href="https://www.linkedin.com/company/tuc-sweden-ab/?originalSubdomain=se" target="_blank">
        <img src={linkedinLogo} alt="linkedin" className="SocialMedia-logo" />
      </a>
      <a href="https://www.instagram.com/tucyrkeshogskola/" target="_blank">
        <img src={instagramLogo} alt="Instagram" className="SocialMedia-logo" />
      </a>
      <a href="https://www.facebook.com/tucsweden/?locale2=en_GB&_rdr" target="_blank">
        <img src={facebookLogo} alt="Facebook" className="SocialMedia-logo" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;