import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  body {
    font-family: 'Oswald', Helvetica, Arial, sans-serif;
  }
  #root {
    background-color: #fafafa;
    height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`

export default GlobalStyle
