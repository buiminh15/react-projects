import React from 'react'
import styled from 'styled-components'
import { hbLayer1, hbLayer2, hbMainPhones, hbRect } from '../themes/Images'
import H1 from './H1'
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
  }

  .right {
  }
`

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
const Rect = styled.div`
  position: absolute;
  right: 0;
  z-index: 0;
  .rect {
    /* transform: matrix(0.15, -1, 0.97, 0.19, 0, 0); */
    height: 785px;
  }
`

function Hero() {
  return (
    <Container>
      <Layer>
        <img className='layer1' src={hbLayer1.src} alt={hbLayer1.alt} />
        <img className='layer2' src={hbLayer2.src} alt={hbLayer2.alt} />
      </Layer>
      {/* <Rect>
        <img className='rect' src={hbRect.src} alt={hbRect.alt} />
      </Rect> */}
      <Wrapper>
        <div className='left'>
          <H2 textAlign>
            Easily keep track of all your sales, income and inventory
          </H2>
          <P5 className='desc' textAlign>
            Take your business to the next level with Hishabee <br /> Business
            Manager Mobile App.
          </P5>
        </div>
        <div className='right'>
          <img src={hbMainPhones.src} alt={hbMainPhones.alt} />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Hero
