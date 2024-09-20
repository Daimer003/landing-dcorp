const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};

const theme = {
  colors: {
    // ...
  },
  fonts: {
    // ...
  },
  breakpoints: {
    ...breakpoints,
    up: {
      small: `@media (min-width: ${breakpoints.small})`,
      medium: `@media (min-width: ${breakpoints.medium})`,
      large: `@media (min-width: ${breakpoints.large})`,
      extraLarge: `@media (min-width: ${breakpoints.extraLarge})`,
    },
    down: {
      small: `@media (max-width: ${breakpoints.small})`,
      medium: `@media (max-width: ${breakpoints.medium})`,
      large: `@media (max-width: ${breakpoints.large})`,
      extraLarge: `@media (max-width: ${breakpoints.extraLarge})`,
    },
  },
};


export default theme;


