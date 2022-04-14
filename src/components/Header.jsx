import React from 'react'
import styled from 'styled-components'
import { LinkButton } from './Buttons/LinkButton'
import NoBorderButton from './Buttons/NoBorderButton'
import { MdExitToApp } from 'react-icons/md'

const Container = styled.div`
  position: absolute;
  top: 0;

  display: block;
  width: 100%;

  header {
    width: 100%;

    nav {
      max-width: 110rem;
      margin: 0 auto;
      height: 7.2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .get-app {
        a {
          display: flex;
          align-items: center;

          font-size: 1.4rem;
          svg {
            margin-right: 0.4rem;
          }
        }
      }

      .button-container {
        display: flex;

        > * {
          margin-left: 2rem;
        }
      }
    }
  }
`

function Header({ children, user, handleLogin, handleSignup }) {
  return (
    <Container>
      <header>
        <nav>
          <div className="get-app">
            <LinkButton
              href="https://www.zomato.com/partner_with_us"
              target="_blank"
            >
              <MdExitToApp />
              <span>Get the app</span>
            </LinkButton>
          </div>
          <div className="button-container">
            <LinkButton
              href="https://www.zomato.com/partner_with_us"
              target="_blank"
            >
              Add restaurant
            </LinkButton>

            {user ? (
              <NoBorderButton>User</NoBorderButton>
            ) : (
              <>
                <NoBorderButton handleOnClick={handleLogin}>
                  Login
                </NoBorderButton>
                <NoBorderButton handleOnClick={handleSignup}>
                  Signup
                </NoBorderButton>
              </>
            )}
          </div>
        </nav>
      </header>
    </Container>
  )
}

export default Header
