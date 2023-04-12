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

  h1 {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
