import { createGlobalStyle } from 'styled-components';
import backgroundImage from './images/home-background.jpg';

const GlobalStyle = createGlobalStyle`
  @import url('http://fonts.cdnfonts.com/css/gotham');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gotham Black', sans-serif;
    font-weight: 500;
  }

  body {
    background: url(${backgroundImage}) center center fixed;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  ::-webkit-input-placeholder {
    font-style: italic;
  }

  :-moz-placeholder {
    font-style: italic;  
  }

  ::-moz-placeholder {
    font-style: italic;  
  }

  :-ms-input-placeholder {  
    font-style: italic; 
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #906f6f;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #483838;
    height: 10px;
  }
`;

export default GlobalStyle;
