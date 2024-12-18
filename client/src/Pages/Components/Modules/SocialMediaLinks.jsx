import React from 'react';
import './Footer.css';
import tiktokLogo from '../../../../public/tiktok-logo.png';
import youtubeLogo from '../../../../public/youtube-logo.png';
import linkedinLogo from '../../../../public/linkedin-logo.png';
import instagramLogo from '../../../../public/instagram-logo.png';
import facebookLogo from '../../../../public/facebook-logo.png';


const SocialMediaLinks = () => {
  return (
    <div className = "social-media-logo-container">
      <a href="https://www.tiktok.com/discover/tuc-h%C3%B6gskola-j%C3%B6nk%C3%B6ping" target="_blank">
        <img src={tiktokLogo} alt="Tiktok" className="social-media-logo" />
      </a>
      <a href="https://www.youtube.com/user/TUCtelevision" target="_blank">
        <img src={youtubeLogo} alt="Youtube" className="social-media-logo" />
      </a>
      <a href="https://www.linkedin.com/company/tuc-sweden-ab/?originalSubdomain=se" target="_blank">
        <img src={linkedinLogo} alt="linkedin" className="social-media-logo" />
      </a>
      <a href="https://www.instagram.com/tucyrkeshogskola/" target="_blank">
        <img src={instagramLogo} alt="Instagram" className="social-media-logo" />
      </a>
      <a href="https://www.facebook.com/tucsweden/?locale2=en_GB&_rdr" target="_blank">
        <img src={facebookLogo} alt="Facebook" className="social-media-logo" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;