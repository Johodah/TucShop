import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SocialMediaLinks from './SocialMediaLinks';
import '@testing-library/jest-dom';

describe('SocialMediaLinks Component', () => {
  beforeAll(() => {
    global.open = jest.fn();
  });

  it('should navigate to the correct Tiktok page when the Tiktok image is clicked', () => {
    render(<SocialMediaLinks />);
    const tiktokImage = screen.getByAltText('Tiktok');
    expect(tiktokImage).toBeInTheDocument();

    userEvent.click(tiktokImage);
    expect(global.open).toHaveBeenCalledWith('https://www.tiktok.com/discover/tuc-h%C3%B6gskola-j%C3%B6nk%C3%B6ping', '_blank');    
  });

  it('should navigate to the correct Youtube page when the Youtube image is clicked', () => {
    render(<SocialMediaLinks />);
    const youtubeImage = screen.getByAltText('Youtube');
    expect(youtubeImage).toBeInTheDocument();

    userEvent.click(youtubeImage);
    expect(global.open).toHaveBeenCalledWith('https://www.youtube.com/user/TUCtelevision', '_blank'); 
  });

  it('should navigate to the correct Linkedin page when the Linkedin image is clicked', () => {
    render(<SocialMediaLinks />);
    const linkedinImage = screen.getByAltText('Linkedin');
    expect(linkedinImage).toBeInTheDocument();

    userEvent.click(linkedinImage);
    expect(global.open).toHaveBeenCalledWith('https://www.linkedin.com/company/tuc-sweden-ab/?originalSubdomain=se', '_blank'); 
  });

  it('should navigate to the correct Instagram page when the Instagram image is clicked', () => {
    render(<SocialMediaLinks />);
    const instagramImage = screen.getByAltText('Instagram');
    expect(instagramImage).toBeInTheDocument();

    userEvent.click(instagramImage);
    expect(global.open).toHaveBeenCalledWith('https://www.instagram.com/tucyrkeshogskola/', '_blank'); 
  });

  it('should navigate to the correct Facebook page when the Facebook image is clicked', () => {
    render(<SocialMediaLinks />);
    const facebookImage = screen.getByAltText('Facebook');
    expect(facebookImage).toBeInTheDocument();

    userEvent.click(facebookImage);
    expect(global.open).toHaveBeenCalledWith('https://www.facebook.com/tucsweden/?locale2=en_GB&_rdr', '_blank'); 
  });
});
