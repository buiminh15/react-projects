import React from 'react'
import styled from 'styled-components'
import { hbLogo } from '../themes/Images'
import H5 from './H5'
import P5 from './P5'

const Container = styled.div`
  width: 100%;
  height: auto;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(248, 248, 248, 0) 0%,
    #f8f8f8 100%
  );
  padding-top: 8rem;
`

const Row = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, auto);
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`
const Logo = styled.img`
  cursor: pointer;
  width: 19.7rem;
  height: 4rem;
`

const Hr = styled.div`
  width: 100%;
  height: 0px;

  border: 1px solid rgba(27, 28, 31, 0.1);

  margin: 4.8rem 0 4rem;
`
const P5Footer = styled(P5)`
  display: block;
  padding-bottom: 6.7rem;
  margin: 0;
`

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Logo src={hbLogo.src} alt={hbLogo.alt} />
          <H5 textAlign>Hishabee Technologies Limited</H5>
          <P5 textAlign>Contact: +8809638011199</P5>
        </Col>
        <Col>
          <H5 textAlign>Useful Links</H5>
          <P5 textAlign>Tutorials</P5>
          <P5 textAlign>Terms of Use</P5>
          <P5 textAlign>Privacy Policy</P5>
          <P5 textAlign>Feedback & Sugesstion</P5>
          <P5 textAlign>Contact Us</P5>
        </Col>
        <Col>
          <H5 textAlign></H5>
          <P5 textAlign>Tutorials</P5>
          <P5 textAlign>Terms of Use</P5>
          <P5 textAlign>Privacy Policy</P5>
        </Col>
        <Col>
          <H5 textAlign>Newsletter</H5>
        </Col>
      </Row>
      <Hr />
      <P5Footer>
        © 2022 Hishabee Business Manager. All Rights Reserved. Hishabee
        Technologies Limited
      </P5Footer>
    </Container>
  )
}

export default Footer
