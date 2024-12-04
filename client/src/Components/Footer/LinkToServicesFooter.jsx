import React from 'react';
import { Link } from 'react-router-dom';

const LinkToServicesFooter = () => {
  return (
    <div className="LinkTextFooterContactUs">
      <Link to="/Contact">
        Contact Us
      </Link>
    </div>
  );
};

export default LinkToServicesFooter;
