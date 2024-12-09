import React from 'react';
import { Link } from 'react-router-dom';

const LinkToServicesFooter = () => {
    return (
        <div className="links-to-services-text-container">
            <div className="links-to-services-text-footer1">
                <p>We at CUT</p>
                <p>Whistle blowing</p>
                <p>Graphic manual</p>
                <Link to="/Contact">
                    <div className="contact-us-text-link">
                        <p>Contact Us</p>
                    </div>
                </Link>
            </div>
            <div className="links-to-services-text-footer2">
                <a href="https://www.tucsweden.se/cookiepolicy-tuc-yrkeshoskola/" target="_blank">
                    <div className="cookie-policy-text-link"> <p>About the Website Cookie policy</p> </div>
                </a>
                <a href="https://www.tucsweden.se/personuppgiftspolicy/" target="_blank">
                    <div className="personal-data-policy-text-link"><p>Personal data policy</p> </div>
                </a>
                <a href="https://www.tucsweden.se/uppdatera-dina-cookieinstillningar/" target="_blank">
                    <div className="update-cookie-settings-text-link"> <p>View and update your cookie consent</p> </div>
                </a>
            </div>
            <div className="links-to-services-text-footer3">
                <a href="https://tucsweden.learnpoint.se/LoginForms/LoginForm.aspx?ReturnUrl=%2Fdefault.aspx" target="_blank">
                    <div className="login-TUC-text-link"> <p>Log in to CUT</p> </div>
                </a>
            </div>
        </div>
    );
};

export default LinkToServicesFooter;
