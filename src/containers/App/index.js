import GlobalStyle from 'global-styles';
import styled from 'styled-components'


const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      Appaa
      <GlobalStyle />
    </AppWrapper>
  )
}

export default App
