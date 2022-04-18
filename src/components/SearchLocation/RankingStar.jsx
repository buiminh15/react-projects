import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils/constants'
import { MdStar } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { IconContext } from 'react-icons'

const ContainerRanking = styled.div`
  display: inline-block;

  background: ${props => props.point ? COLORS.seagreen : COLORS.drakgray};
  font-size: 1.3rem;
  padding: 0.1 0.3rem;
`

const Container = styled.div`
  display: flex;

  .text {
    margin-left: 0.3rem;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  .line {
    width: 0rem;
    height: 2rem;
    border: 0.05rem solid rgb(207, 207, 207);
  }

`

function RankingStar({ point }) {
  return (
    <ContainerRanking>
      <IconContext.Provider value={{ size: '3rem', color: 'white' }}>
        <MdStar />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: '3rem', color: 'white' }}>
        <HiMinusSm />
      </IconContext.Provider>
    </ContainerRanking>
  )
}

function RankingContainer({ pointDining, pointDelivery }) {
  return (
    <Container>
      <div className="dining">
        <RankingStar point={pointDining} />
        <p className='text'>dining</p>
      </div>
      <div className="line" />
      <div className="delivery">
        <RankingStar point={pointDelivery} />
        <p className='text'>delivery</p>
      </div>
    </Container>
  )

}

export default RankingContainer
