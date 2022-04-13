import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  color: ${props => props.color ?? COLORS.silver};
  background-color: ${props => props.backgroundColor ?? COLORS.white};

  height: ${props => props.height ?? '4.8rem'};
  width: ${props => props.width ?? '100%'};
  border: 0.2px solid ${COLORS.gainboro};
  /* padding: ${props => props.padding ?? '1rem 6rem'}; */
  cursor: pointer;
  border-radius: 0.5rem;
  font-size: 1.8rem;

`

function Button({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

export default Button
