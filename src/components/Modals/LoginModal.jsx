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

function LoginModal({ modalIsOpen, afterOpenModal, closeModal, handleModals }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className={styles.Modal}
      contentLabel="Example Modal"
    >
      <Container>
        <Title>
          <p>Login</p>
          <IconContext.Provider value={{ size: '2.2rem', }}>
            <MdOutlineClose onClick={closeModal} />
          </IconContext.Provider>
        </Title>
        <Body>
          <Button backgroundColor={COLORS.black} color={COLORS.silver}>
            <span style={{ marginLeft: '0.4rem' }}>Send OTP</span>
          </Button>
          <OrLine >
            <Line />
            <span>or</span>
            <Line />
          </OrLine>
          <Button>
            <IconContext.Provider value={{ size: '2.2rem', color: '#ef4f5f' }}>
              <MdEmail />
            </IconContext.Provider>
            <span style={{ marginLeft: '0.4rem' }}>Continue with Email</span>
          </Button>
          <Button>
            <IconContext.Provider value={{ size: '2.2rem', }}>
              <FcGoogle />
            </IconContext.Provider>
            <span style={{ marginLeft: '0.4rem' }}>Continue with Google</span>
          </Button>
          <Line />
          <CreatAccount>
            New to Zomato? <span onClick={() => handleModals('login')}>Create Account</span>
          </CreatAccount>
        </Body>
      </Container>
    </Modal>
  )
}

export default LoginModal
