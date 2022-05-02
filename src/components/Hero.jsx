import React from 'react'
import styled from 'styled-components'
import {
  hbBadgeAppStore,
  hbBadgeGoogle,
  hbLayer1,
  hbLayer2,
  hbMainPhones,
} from '../themes/Images'
import H2 from './H2'
import P5 from './P5'

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 785px;
  overflow: hidden;
  background: radial-gradient(
    110.58% 118.96% at 57.38% -10.21%,
    #ffce40 0%,
    #e47b00 100%
  );
`

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;

  position: absolute;
  z-index: 20;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;

    width: 33%;
    .desc {
      font-size: 2rem;
    }
    .text-h2 {
      margin-bottom: 3.5rem;
    }
    .text-header {
      background: rgba(255, 255, 255, 0.35);
      backdrop-filter: blur(74px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 49px;

      padding: 0.7rem 1.5rem;

      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 24px;
      /* identical to box height, or 109% */

      text-align: center;

      color: #1b1c1f;
      width: fit-content;
      box-sizing: border-box;
      margin-bottom: 2.5rem;
    }
  }

  .right {
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .buttonBadge {
    cursor: pointer;
  }
`

const TextHeader = styled.div``

const Layer = styled.div`
  overflow: hidden;

  .layer1 {
    height: 785px;
    z-index: 2;
    position: absolute;
    left: 0;
    transform: scale(2);
  }
  .layer2 {
    height: 785px;
    z-index: 1;
    position: absolute;
    left: 0;
    transform: scale(1.9);
  }
`

function Hero() {
  return (
    <Container>
      <Layer>
        <img className='layer1' src={hbLayer1.src} alt={hbLayer1.alt} />
        <img className='layer2' src={hbLayer2.src} alt={hbLayer2.alt} />
      </Layer>

      <Wrapper>
        <div className='left'>
          <span className='text-header'>All-in-one Business Manager 🔥 </span>
          <H2 className='text-h2' textAlign>
            Easily keep track of all your sales, income and inventory
          </H2>
          <P5 className='desc' textAlign>
            Take your business to the next level with Hishabee <br /> Business
            Manager Mobile App.
          </P5>
          <ButtonsContainer>
            <a className='buttonBadge' href='#'>
              <img src={hbBadgeGoogle.src} alt={hbBadgeGoogle.alt} />
            </a>
            <a className='buttonBadge' href='#'>
              <img src={hbBadgeAppStore.src} alt={hbBadgeAppStore.alt} />{' '}
            </a>
          </ButtonsContainer>
        </div>
        <div className='right'>
          <img src={hbMainPhones.src} alt={hbMainPhones.alt} />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Hero
