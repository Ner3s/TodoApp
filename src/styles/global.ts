import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, label, textarea, button {
    font: 14px Helvetica, sans-serif;
  }

`;
