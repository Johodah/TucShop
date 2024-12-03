import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';  // Ensure this import is correct
import SocialMediaLinks from './SocialMediaLinks';

describe('SocialMediaLinks Component', () => {
  beforeEach(() => {
    global.open = jest.fn();
  });

  it('should navigate to the correct Tiktok page when the Tiktok image is clicked', async () => {
    render(<SocialMediaLinks />);
    const tiktokImage = await screen.findByAltText('Tiktok');
    userEvent.click(tiktokImage);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.tiktok.com/discover/tuc-h%C3%B6gskola-j%C3%B6nk%C3%B6ping',
      '_blank'
    );
  });

  it('should navigate to the correct Youtube page when the Youtube image is clicked', async () => {
    render(<SocialMediaLinks />);
    const youtubeImage = await screen.findByAltText('Youtube');
    userEvent.click(youtubeImage);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.youtube.com/user/TUCtelevision',
      '_blank'
    );
  });

  it('should navigate to the correct Linkedin page when the Linkedin image is clicked', async () => {
    render(<SocialMediaLinks />);
    const linkedinImage = await screen.findByAltText('linkedin'); 
    userEvent.click(linkedinImage);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.linkedin.com/company/tuc-sweden-ab/?originalSubdomain=se',
      '_blank'
    );
  });

  it('should navigate to the correct Instagram page when the Instagram image is clicked', async () => {
    render(<SocialMediaLinks />);
    const instagramImage = await screen.findByAltText('Instagram');
    userEvent.click(instagramImage);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.instagram.com/tucyrkeshogskola/',
      '_blank'
    );
  });

  it('should navigate to the correct Facebook page when the Facebook image is clicked', async () => {
    render(<SocialMediaLinks />);
    const facebookImage = await screen.findByAltText('Facebook');
    userEvent.click(facebookImage);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.facebook.com/tucsweden/?locale2=en_GB&_rdr',
      '_blank'
    );
  });
});