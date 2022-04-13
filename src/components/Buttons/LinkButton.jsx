import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const LinkButton = styled.a`
  font-size: 1.8rem;
  text-decoration: none;

  &:link, &:visited, &:hover, &:active {
    color: ${COLORS.white};
  }

`

