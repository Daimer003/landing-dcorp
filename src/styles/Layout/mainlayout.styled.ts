import styled from "styled-components";

const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};


const theme = {
  col: {

  },
  colors: {
    // ...
  },
  fonts: {
    small: `font-size: 16px`,
    medium: `font-size: 16px`,
    large: `font-size: 16px`,
    extraLarge: `font-size: 16px`,
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

export const Container = styled.div<{ image: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 0;
  :before{
    display: flex;
    width: min(900px, 100%);
    height: 80%;
    content: "";
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    object-fit: cover;
    position: absolute;
    z-index: 0;
  }
`;
