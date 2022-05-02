import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../themes/Colors'
import { hbLogo } from '../themes/Images'
import clsx from 'clsx'

const menu = ['Home', 'About', 'Features', 'Blog', 'Pricing', 'Contact']

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 118px;
  margin: 0 auto;
`

const Logo = styled.img`
  cursor: pointer;
  width: 19.7rem;
  height: 4rem;
`

const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  .item {
    margin-left: 32px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */

    text-align: center;

    color: #1b1c1f;
    cursor: pointer;
  }
  .active {
    color: ${COLORS.mainColor};
  }
`

function Header() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Container>
      <Logo src={hbLogo.src} alt={hbLogo.alt} />
      <NavMenu>
        {menu.map((item, index) => (
          <li
            key={item}
            className={clsx('item', activeIndex === index && 'active')}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </NavMenu>
    </Container>
  )
}

export default Header
