import { render, screen, fireEvent } from '@testing-library/react';
import SocialMediaLinks from './SocialMediaLinks';

describe('SocialMediaLinks Component', () => {
  beforeEach(() => {
    delete global.open;
    global.open = jest.fn();
  });

  it('should navigate to the correct Tiktok page when the Tiktok image is clicked', () => {
    render(<SocialMediaLinks />);
    const tiktokLink = screen.getByAltText('Tiktok').closest('a');
    fireEvent.click(tiktokLink);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.tiktok.com/discover/tuc-h%C3%B6gskola-j%C3%B6nk%C3%B6ping',
      '_blank'
    );
  });

  it('should navigate to the correct Youtube page when the Youtube image is clicked', () => {
    render(<SocialMediaLinks />);
    const youtubeLink = screen.getByAltText('Youtube').closest('a');
    fireEvent.click(youtubeLink);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.youtube.com/user/TUCtelevision',
      '_blank'
    );
  });

  it('should navigate to the correct Linkedin page when the Linkedin image is clicked', () => {
    render(<SocialMediaLinks />);
    const linkedinLink = screen.getByAltText('linkedin').closest('a');
    fireEvent.click(linkedinLink);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.linkedin.com/company/tuc-sweden-ab/?originalSubdomain=se',
      '_blank'
    );
  });

  it('should navigate to the correct Instagram page when the Instagram image is clicked', () => {
    render(<SocialMediaLinks />);
    const instagramLink = screen.getByAltText('Instagram').closest('a');
    fireEvent.click(instagramLink);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.instagram.com/tucyrkeshogskola/',
      '_blank'
    );
  });

  it('should navigate to the correct Facebook page when the Facebook image is clicked', () => {
    render(<SocialMediaLinks />);
    const facebookLink = screen.getByAltText('Facebook').closest('a');
    fireEvent.click(facebookLink);
    expect(global.open).toHaveBeenCalledWith(
      'https://www.facebook.com/tucsweden/?locale2=en_GB&_rdr',
      '_blank'
    );
  });
});
