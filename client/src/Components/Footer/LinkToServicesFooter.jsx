import React from 'react';
import { Link } from 'react-router-dom';

const LinkToServicesFooter = () => {
  return (
    <div className="LinksToServicesTextFooter">
      <p>We at CUT</p>
      <p>Whistle blowing</p>
      <p>Graphic manual</p>
      <div className="LinkTextFooterContactUs">
        <Link to="/Contact">
          <div className="ContactUsTextLink">
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LinkToServicesFooter;
