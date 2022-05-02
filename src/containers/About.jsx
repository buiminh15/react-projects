import React from 'react'
import styled from 'styled-components'
import H2 from '../components/H2'
import ModuleCardItem from '../components/ModuleCardItem'
import P5 from '../components/P5'
import { hbPhone } from '../themes/Images'
const Container = styled.div`
  height: auto;
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const H2Custom = styled(H2)`
  font-size: 3.6rem;
  margin-top: 8.3rem;
  margin-bottom: 1.8rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column: 1.2rem;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 36rem;
  gap: 2rem;
  margin-top: 5rem;
`

function About() {
  return (
    <Container>
      <H2Custom>What is Hishabee Business Manager?</H2Custom>
      <P5>
        Hishabee Business Manager is the most reliable and easy to use Business
        Solution on your mobile. Running a business hasn’t been easier.
        <br /> All-in-one Solution, made in Bangladesh, for Bangladesh.
      </P5>
      <Wrapper>
        <CardContainer>
          <ModuleCardItem />
          <ModuleCardItem />
        </CardContainer>
        <img src={hbPhone.src} alt={hbPhone.alt} />
        <CardContainer>
          <ModuleCardItem />
          <ModuleCardItem />
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default About
