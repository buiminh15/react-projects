import React from 'react'
import styled from 'styled-components'
import H2 from '../components/H2'
import P5 from '../components/P5'
import PricingCardItem from '../components/PricingCardItem'

const Container = styled.div`
  width: 1140px;
  height: 118px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  align-items: center;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
`

const H2Pricing = styled(H2)`
  margin-bottom: 2rem;
`

const P5Pricing = styled(P5)`
  margin-bottom: 3.5rem;
`

function Pricing() {
  return (
    <Container>
      <H2Pricing>Flexible pricing plan for your startup</H2Pricing>
      <P5Pricing>Pricing that scales with your business immediately.</P5Pricing>
      <Wrapper>
        <PricingCardItem />
        <PricingCardItem />
        <PricingCardItem />
      </Wrapper>
    </Container>
  )
}

export default Pricing
