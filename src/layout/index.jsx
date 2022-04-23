import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import routes from '../routes'
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;

  max-width: calc(100% - 14rem);
  margin: 0 auto;

  background-color: white;
`;

function DefaultLayout( {children} ) {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {
            routes.map(({component, title, ...rest}) => (
              <Route {...rest} key={title} element={component}></Route>
            ))
          }
        </Routes>
      </Suspense>
      <Footer />
    </Container>
  )
}

export default DefaultLayout