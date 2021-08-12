import { createGlobalStyle } from 'styled-components';

export const bgColor = '#f7f7f7';
export const primaryColor = '#072E84';
export const secundaryColor = '#EDB512';
export const dangerColor = '#F7685B';

const GlobalStyle = createGlobalStyle`

  * {
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0;
    box-sizing:border-box;
  }



  html, body {
    background: ${bgColor};
    font-family: 'Roboto', Helvetica, sans-serif;
    padding:0;
    margin:0;
    box-sizing:border-box;
    height: 100%;

  }
  

  body, input, textarea {
    font: 400 16px 'Roboto', sans-serif;
    letter-spacing: 0.15px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
    outline: none;
  }
  button {
    outline: none;
  }
`;

export const theme = {
  palette: {
    background: '#F7F7F7',
    white: '#FFF',
    black: '#131313',
    primary: '#2b2828',
    primaryHover: '#0c0c0c',
    secondary: '#f0f0f0',
    secondaryHover: '#e6e6e6',
    error: '#FF4433',
    success: '#16E070',
    successHover: '#009442',
  },
};

export default GlobalStyle;
