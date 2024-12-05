import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import PageLogoLink from './PageLogoLink';

describe('ImageLinkComponent', () => {
  test('navigates to the correct page when image is clicked', () => {
    render(
      <Router>
        <PageLogoLink />
      </Router>
    );

    const image = screen.getByAltText('Go to Home');

    fireEvent.click(image);

    expect(window.location.pathname).toBe('/');
  });
});
