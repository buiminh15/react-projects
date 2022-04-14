import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import LoginModal from '../components/Modals/LoginModal'
import SignUpModal from '../components/Modals/SignupModal'
import { COLORS, IMAGES } from '../utils/constants'
import SearchLocation from '../components/SearchLocation/SearchLocation'
const Container = styled.div`
  position: relative;
  height: calc(100vh - 30rem);
  width: 100%;
  min-height: 42rem;
  max-height: 57rem;

  background: rgb(200, 200, 200);
  overflow: hidden;

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
    transition: all 1.4s ease 0s;
  }
`

const ContentWrapper = styled.div`
  position: absolute;
  bottom: calc(50%-11.1rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  .logo {
    width: 30rem;
    height: 6rem;
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 300;
    color: ${COLORS.gainboro};

    span {
      font-weight: 400;
    }
  }
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
      <img className="banner" src={IMAGES.banner} alt="banner" />
      <Header
        handleLogin={() => setLoginModal(true)}
        handleSignup={() => setSignUpModal(true)}
      />
      <ContentWrapper>
        <img className="logo" src={IMAGES.logo} alt="logo" />
        <h2>
          Discover the best food & drinks in <span>Nashik</span>
        </h2>
        <SearchLocation />
      </ContentWrapper>
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
