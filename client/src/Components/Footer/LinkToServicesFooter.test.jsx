import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import LinkToServicesFooter from './LinkToServicesFooter';

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
});
