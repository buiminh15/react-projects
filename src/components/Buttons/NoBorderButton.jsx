import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

const Container = styled.div`
  font-size: 1.8rem;
  color: ${COLORS.white};

  cursor: pointer;

`

function NoBorderButton({ children, handleOnClick, ...props }) {
  return (
    <Container onClick={handleOnClick} {...props}>
      {children}
    </Container>
  )
}

export default NoBorderButton
