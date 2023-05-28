import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    font-family: Inter;
  }

  html, body {
    height: 100%;
    background-color: #28282B;
    color: white;
    scroll-behavior: smooth;
  }

`

export default GlobalStyle