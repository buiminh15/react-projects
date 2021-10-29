import { createGlobalStyle } from 'styled-components'
import { colors } from 'common'
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  body {
    font-family: Lato,Helvetica,Arial,sans-serif;
  }

  #root {
    background-image: linear-gradient(
      180deg
      ,#${colors.FF0060} 0,#${colors.FF6975});
    min-height: 100%;
    min-width: 100%;
    opacity: 0.8;
  }
  p,
  label {
    line-height: 1.5em;
  }
  h1, h2, h3, h4 {
    font-family: 'Oswald',Arial,sans-serif;
    font-weight: 400;
    line-height: 1.1;
  }
`

export default GlobalStyle
