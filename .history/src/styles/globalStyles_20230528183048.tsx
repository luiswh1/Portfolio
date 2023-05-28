import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    font-family: Inter;
  }

html {
  scroll-behavior: smooth;
}

  html, body {
    height: 100%;
    background-color: #28282B;
    color: white;
  }

`

export default GlobalStyle