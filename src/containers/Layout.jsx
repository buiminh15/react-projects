import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout({ children }) {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
