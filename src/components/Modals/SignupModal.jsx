import React from 'react'
import Modal from 'react-modal';
import styles from './LoginModal.module.css'
import styled from 'styled-components'
import { MdOutlineClose, MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import Button from '../Buttons/Button';
import { FcGoogle } from "react-icons/fc";
import { COLORS } from '../../utils/constants';

Modal.setAppElement('#root');

const Container = styled.div`
 
 max-width: 40rem;
 margin: 0 auto;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 2.2rem;
    font-weight: 500;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 2.4rem;
  }
`

const Line = styled.div`
  border-bottom: 0.1px solid ${COLORS.gainboro};
  width: 100%;
`

const OrLine = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.6rem;
    padding: 0 1rem;
    color: ${COLORS.silver}
  }
`

const CreatAccount = styled.div`
  display: block;
  font-size: 1.8rem;
  span {
    color: ${COLORS.red};
    cursor: pointer;
  }

`

const Terms = styled.div`
  display: flex;
  font-size: 1.4rem;
  align-items: flex-start;
  input {
    margin-right: 0.8rem;
    margin-top: 0;
    width: 2rem;
    height: 2rem;
  }
  span {
  a {
    text-decoration: none;

    &:hover, &:active, &:link, &:visited {
      color: ${COLORS.red};
      font-weight: 500;
    }
  }
  }


`

function SignUpModal({ modalIsOpen, afterOpenModal, closeModal, handleModals }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className={styles.Modal}
      contentLabel="Signup Modal"
    >
      <Container>
        <Title>
          <p>Signup</p>
          <IconContext.Provider value={{ size: '2.2rem', }}>
            <MdOutlineClose onClick={closeModal} />
          </IconContext.Provider>
        </Title>
        <Body>
          <Terms>
            <input type='checkbox' />
            <span> I agree to Zomato's <a href='#'>Terms of Service, Privacy Policy</a> and
              <a href='#'> Content Policies</a></span>

          </Terms>
          <Button backgroundColor={COLORS.black} color={COLORS.silver}>
            <span style={{ marginLeft: '0.4rem' }}>Create Account</span>
          </Button>
          <OrLine >
            <Line />
            <span>or</span>
            <Line />
          </OrLine>
          <Button>
            <IconContext.Provider value={{ size: '2.2rem', }}>
              <FcGoogle />
            </IconContext.Provider>
            <span style={{ marginLeft: '0.4rem' }}>Continue with Google</span>
          </Button>
          <Line />
          <CreatAccount>
            Already have an account? <span onClick={() => handleModals('signup')}>Log in</span>
          </CreatAccount>
        </Body>
      </Container>
    </Modal>
  )
}

export default SignUpModal
