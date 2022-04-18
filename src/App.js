import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import { ErrorBoundary } from 'react-error-boundary'
import APIErrorProvider from './providers/APIErrorProvider'
import APIErrorNotification from './components/APIErrorNotification';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function ErrorFallback(error) {
  debugger
  return (
    <div style={{}}>
      <p>Something went wrong:</p>
      <pre>{error.error.message}</pre>
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  )
}

const Container = styled.div`
  position:relative;

  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <APIErrorProvider>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Container>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
            <APIErrorNotification />
          </Container>
        </SkeletonTheme>
      </APIErrorProvider>

    </ErrorBoundary>
  )
}

export default App
