import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* Fonts:
font-family: 'Kanit', sans-serif;
font-weight: 600;
font-family: 'Nunito Sans', sans-serif;
font-weight: 200;
font-weight: 400;
font-weight: 700;
font-family: 'Open Sans', sans-serif;
font-weight: 400;
font-weight: 700; */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #0E1624;
    overflow-y: scroll;
  }

  h1 {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #f9c04d;
    text-transform: uppercase;
    margin: 1rem 0;
  }

  h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 1rem;
  }
`;

export default GlobalStyles;
