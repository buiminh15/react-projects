import GlobalStyle from 'global-styles'
import styled from 'styled-components'
import { colors, images } from 'common'
import Header from 'containers/Header'
import Container from 'containers/Container'

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  position: relative;
  z-index: 1;
`

const BackgroundColorLayer = styled.div`
  background-size: cover;
  background-image: url(${images.image1});
  opacity: 0.4;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 30%;
  box-shadow: inset 0 -40px 60px 10px #${colors.FF0060};
`

function App() {
  return (
    <>
      <BackgroundColorLayer />
      <AppWrapper>
        <Header />
        <Container></Container>
        <GlobalStyle />
      </AppWrapper>
    </>
  )
}

export default App
