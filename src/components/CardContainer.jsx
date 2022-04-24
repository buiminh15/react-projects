import React from 'react'
import styled from "styled-components";


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 38.7rem);
  column-gap: 6.9rem;

`

function CardContainer({children}) {
  return (
    <Container>{children}</Container>
  )
}

export default CardContainer