import React from 'react';
import { Link } from 'react-router-dom';

const LinkToServicesFooter = () => {
    return (
        <div className="LinksToServicesTextContainer">
            <div className="LinksToServicesTextFooter1">
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
            <div className="LinksToServicesTextFooter2">
            <p>About the Website
            Cookie policy</p>
            <p>Personal data policy</p>
            <p>View and update your cookie consent</p>
            </div>
            <div className="LinksToServicesTextFooter3">
            <p>Log in to ForgetPoint</p>
            </div>
        </div>
    );
};

export default LinkToServicesFooter;
