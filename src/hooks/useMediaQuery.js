import { createBreakpoint } from 'react-use';

// CSS Media Queries
// $media-xsmall: 20em; // 320px
// $media-small: 30em; // 480px
// $media-medium: 48.063em; // 769px
// $media-large: 64em; // 1024px
// $media-xlarge: 80em; // 1280px
// $media-xxlarge: 90em; //1440px

const mediaQuery = {
  xSmall: 320,
  small: 480,
  medium: 769,
  large: 1024,
  xLarge: 1280,
  xxLarge: 1440,
};

export const useMediaQuery = createBreakpoint(mediaQuery);
