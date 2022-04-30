import React from 'react'
import styled from 'styled-components'
import H2 from '../components/H2'
import P5 from '../components/P5'
import {
  hbTopLeft,
  hbTopRight,
  hbBottomLeft,
  hbBottomRight,
} from '../themes/Images'

const Container = styled.div`
  width: 100%;
  height: 419px;

  background: linear-gradient(291.38deg, #f2a520 31.57%, #ffce40 106.52%);

  position: relative;
  inset: 0;

  .top-left,
  .top-right,
  .bottom-right,
  .bottom-left {
    position: absolute;
  }

  .top-right {
    top: 2.4rem;
    right: 3.4rem;
  }

  .bottom-left {
    bottom: 2.4rem;
    left: 2.4rem;
  }

  .bottom-right {
    bottom: 0;
    right: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .contact-input {
    display: flex;

    input {
      padding: 10px 14px;
      margin-right: 2.4rem;
      width: 320px;
      height: 46px;

      /* White */

      background: #ffffff;
      /* Gray/200 */

      border: 1px solid #d5dae1;
      box-sizing: border-box;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      outline: none;

      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(27, 28, 31, 0.75);
    }
  }
`

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  /* width: 112px; */
  height: 48px;

  background: #1b1c1f;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 6px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Primary/050 */

  color: #f0fdf4;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
`

const P5Contact = styled(P5)`
  font-weight: bold;
`

function ContactUs() {
  return (
    <Container>
      <img src={hbTopLeft.src} alt={hbTopLeft.alt} className='top-left' />
      <img src={hbTopRight.src} alt={hbTopRight.alt} className='top-right' />
      <img
        src={hbBottomLeft.src}
        alt={hbBottomLeft.alt}
        className='bottom-left'
      />
      <img
        src={hbBottomRight.src}
        alt={hbBottomRight.alt}
        className='bottom-right'
      />
      <Wrapper>
        <H2>Got any Question? </H2>
        <P5Contact>Reach out to us . Call us at +8809638011199</P5Contact>
        <div className='contact-input'>
          <input type='text' placeholder='Enter your email' />
          <Button>Contact Us</Button>
        </div>
      </Wrapper>
    </Container>
  )
}

export default ContactUs
