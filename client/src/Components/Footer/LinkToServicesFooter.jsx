import React from 'react';
import { Link } from 'react-router-dom';

const LinkToServicesFooter = () => {
  return (
    <div className="LinkTextFooterContactUs">
      <Link to="/Contact">
      <div className="ContactUsTextLink">
      Contact Us
      </div>
      </Link>
    </div>
  );
};

export default LinkToServicesFooter;
