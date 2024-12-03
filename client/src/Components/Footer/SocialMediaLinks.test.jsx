import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialMediaLinks from './SocialMediaLinks';

describe('SocialMediaLinks Component', () => {
  test('renders all social media links with correct hrefs', () => {
    render(<SocialMediaLinks />);
    
    const links = [
      { href: "https://www.tiktok.com/discover/tuc-h%C3%B6gskola-j%C3%B6nk%C3%B6ping", alt: "Tiktok" },
      { href: "https://www.youtube.com/user/TUCtelevision", alt: "Youtube" },
      { href: "https://www.linkedin.com/company/tuc-sweden-ab/?originalSubdomain=se", alt: "linkedin" },
      { href: "https://www.instagram.com/tucyrkeshogskola/", alt: "Instagram" },
      { href: "https://www.facebook.com/tucsweden/?locale2=en_GB&_rdr", alt: "Facebook" }
    ];

    links.forEach(({ href, alt }) => {
      const linkElement = screen.getByAltText(alt).closest('a');
      expect(linkElement).toHaveAttribute('href', href);
      expect(linkElement).toHaveAttribute('target', '_blank');
      expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('renders all images with the correct alt text', () => {
    render(<SocialMediaLinks />);
    
    const altTexts = ["Tiktok", "Youtube", "linkedin", "Instagram", "Facebook"];
    
    altTexts.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });
});
