import { createGlobalStyle } from "styled-components";
import  { colors } from "./config/theme";

//global styles

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Helvetica' !;
    src: url('./assets/fonts/Helvetica.ttf');
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
   }
  
  html {
    font-size: 62.5%;
     }
  body {
    box-sizing: border-box;
    //font-family: "Helvetica-Light" !important;
    font-weight: 400 !important;
    font-size: 1.6rem !important;
    line-height: 1.7 !important;
    background:${colors.background} !important
  }
  
  a:hover {
    font-weight: 500;
    transform: scale(1.02);
  }
`;
  export default GlobalStyle;

