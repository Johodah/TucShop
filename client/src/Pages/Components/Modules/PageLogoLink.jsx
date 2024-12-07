import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageLogo from './Images/CUT-logo.png';

const PageLogoLink = () => {
  const handleClick = () => {
    window.location.pathname = "/";
  };

  return (
    <div className="pageLogoContainer"> 
      <img src={pageLogo} alt="Go to Home" onClick={handleClick} className="Page-Logo" />
    </div>
  );
};

export default PageLogoLink;
