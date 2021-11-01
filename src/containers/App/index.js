import Header from "components/Header"
import styled from "styled-components"
import GlobalStyle from 'global-styles'

function App() {
  const ContainerWrapper = styled.div`
    background-color: #fbe9c3;
    height: 100%;
  `

  return (
    <ContainerWrapper>
      <Header/>
      <GlobalStyle/>
    </ContainerWrapper>
  )
}

export default App
