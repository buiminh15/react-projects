import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import LoginModal from '../components/Modals/LoginModal'
import SignUpModal from '../components/Modals/SignupModal'

const Container = styled.div`
  position: relative;
`

function Home() {
  const [loginModal, setLoginModal] = useState(false)
  const [signUpModal, setSignUpModal] = useState(false)

  const handleModals = (screen) => {
    if (screen === 'login') {
      setLoginModal(false)
      setSignUpModal(true)
    }

    if (screen === 'signup') {
      setLoginModal(true)
      setSignUpModal(false)
    }
  }
  return (
    <Container>
      <Header
        handleLogin={() => setLoginModal(true)}
        handleSignup={() => setSignUpModal(true)}
      />

      {loginModal && (
        <LoginModal
          modalIsOpen={loginModal}
          closeModal={() => setLoginModal(false)}
          handleModals={handleModals}
        />
      )}
      {signUpModal && (
        <SignUpModal
          modalIsOpen={signUpModal}
          closeModal={() => setSignUpModal(false)}
          handleModals={handleModals}
        />
      )}
    </Container>
  )
}

export default Home
