import React from 'react'
import styled from 'styled-components';
import { hbLayer1, hbRect } from '../themes/Images';

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 785px;
`;

const Layer = styled.div`
  position: absolute;
  left: 0;
  height: 785px;
    z-index: 1;
  .layer {
/* transform: rotate(51.89deg); */
    opacity: 0.5;
    height: 785px;
  }
`;
const Rect = styled.div`
  position: absolute;
  right: 0;
    z-index: 0;
  .rect {
    /* transform: matrix(0.15, -1, 0.97, 0.19, 0, 0); */
    height: 785px;
  }
`;

function Hero() {
  return (
    <Container>
      <Layer>
        <img className="layer" src={hbLayer1.src} alt={hbLayer1.alt} />
      </Layer>
      <Rect>
        <img className="rect" src={hbRect.src} alt={hbRect.alt} />
      </Rect>
    </Container>
  )
}

export default Hero
