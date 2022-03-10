import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    scrollbar-width: thin;
    scrollbar-color: #262140;
  }

  /* Works on Chrome, Edge, and Safari */
   *::-webkit-scrollbar {
    width: 10px;
    height:8px;
  } 

  *::-webkit-scrollbar-track {
    background:  #262140;
    border-radius:8px;

  }

  *::-webkit-scrollbar-thumb {
    background-color:  #9E9CC9;
    border-radius: 8px;
    border: 1px solid #262140
  } 

  body {
    background-color:  #1D1934;
    font-family: "Gilroy-Medium", sans-serif;
        -webkit-font-smoothing: antialiased;
  }

  h1{
    font-family: "Gilroy-SemiBold", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
