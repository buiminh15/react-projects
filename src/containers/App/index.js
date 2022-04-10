import IconContainer from 'containers/IconContainer'
import GlobalStyle from 'global-styles'
import styled from 'styled-components'

function App() {
  const AppWrapper = styled.div`
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
  `

  return (
    <AppWrapper>
      App
      <IconContainer />
      <GlobalStyle />
    </AppWrapper>
  )
}

export default App
