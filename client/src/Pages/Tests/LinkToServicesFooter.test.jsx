import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import LinkToServicesFooter from '../Components/Modules/LinkToServicesFooter';

describe('Contact Us Link', () => {
  test('navigates to the correct page when clicked', () => {
    render(
      <Router>
        <LinkToServicesFooter />
      </Router>
    );

    const contactLink = screen.getByRole('link', { name: 'Contact Us' });

    fireEvent.click(contactLink);

    expect(window.location.pathname).toBe('/Contact');
  });

  test('navigates to the correct external URL when About the Website link is clicked', () => {
    render(
      <Router>
        <LinkToServicesFooter />
      </Router>
    );

    const aboutWebsiteLink = screen.getByRole('link', { name: 'About the Website Cookie policy' });

    fireEvent.click(aboutWebsiteLink);

    expect(aboutWebsiteLink).toHaveAttribute('href', 'https://www.tucsweden.se/cookiepolicy-tuc-yrkeshoskola/'); 
    expect(aboutWebsiteLink).toHaveAttribute('target', '_blank');
  });

  test('navigates to the correct external URL when Personal data policy link is clicked', () => {
    render(
      <Router>
        <LinkToServicesFooter />
      </Router>
    );

    const personalDataPolicyLink = screen.getByRole('link', { name: 'Personal data policy' });

    fireEvent.click(personalDataPolicyLink);

    expect(personalDataPolicyLink).toHaveAttribute('href', 'https://www.tucsweden.se/personuppgiftspolicy/'); 
    expect(personalDataPolicyLink).toHaveAttribute('target', '_blank');
  });

  test('navigates to the correct external URL when Log in to TUC link is clicked', () => {
    render(
      <Router>
        <LinkToServicesFooter />
      </Router>
    );

    const loginTUCLink = screen.getByRole('link', { name: 'Log in to CUT' });

    fireEvent.click(loginTUCLink);

    expect(loginTUCLink).toHaveAttribute('href', 'https://tucsweden.learnpoint.se/LoginForms/LoginForm.aspx?ReturnUrl=%2Fdefault.aspx'); 
    expect(loginTUCLink).toHaveAttribute('target', '_blank');
  });
});
