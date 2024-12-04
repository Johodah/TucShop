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
                            <p>Contact Us</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="LinksToServicesTextFooter2">
                <a href="https://www.tucsweden.se/cookiepolicy-tuc-yrkeshoskola/" target="_blank">
                <div className="CookiePolicyLink"> <p>About the Website Cookie policy</p> </div>
                </a>
                <a href="https://www.tucsweden.se/personuppgiftspolicy/" target="_blank">
                <div className="PersonalDataPolicyLink"><p>Personal data policy</p> </div>
                </a>
                <a href="https://www.tucsweden.se/uppdatera-dina-cookieinstillningar/" target="_blank">
                <div className="UpdateCookieSettingsLink"> <p>View and update your cookie consent</p> </div>
                </a>
            </div>
            <div className="LinksToServicesTextFooter3">
                <a href="https://tucsweden.learnpoint.se/LoginForms/LoginForm.aspx?ReturnUrl=%2Fdefault.aspx" target="_blank">
                <div className="LoginTUCLink"> <p>Log in to ForgetPoint</p> </div>
                </a>
            </div>
        </div>
    );
};

export default LinkToServicesFooter;
