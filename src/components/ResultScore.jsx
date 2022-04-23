import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};

  background: white;
  width: 23.6rem;
  max-width: 23.6rem;
  max-height: 11.6rem;
  border-radius: 1.726rem;

  box-shadow: 0 1rem rgba(2, 147, 52, 0.1);
`;

function ResultScore() {
  return (
    <Container>ResultScore</Container>
  )
}

export default ResultScore