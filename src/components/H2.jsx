import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  /* identical to box height, or 125% */

  text-align: center;
  letter-spacing: -0.02em;

  /* Gray/900 */

  color: #2a3342;
`
export default function H2({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}
