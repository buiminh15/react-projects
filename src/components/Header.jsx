import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../themes/Colors'
import { hbLogo } from '../themes/Images'
import clsx from 'clsx';

const menu = ['Home', 'About', 'Features', 'Blog', 'Pricing', 'Contact',]

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1140px;
  height: 118px;
  margin: 0 auto;
`

const Logo = styled.img`
  cursor: pointer;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  .item {
    margin-left: 32px;

    cursor: pointer;
  }
  .active {
    color: ${COLORS.mainColor}
  }
  
`;

function Header() {
  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <Container>
      <Logo src={hbLogo.src} alt={hbLogo.alt} />
      <NavMenu>
        {
          menu.map((item, index) => (
            <li key={item} className={clsx('item', activeIndex === index && 'active')} onClick={() => setActiveIndex(index)}>{item}</li>
          ))
        }
      </NavMenu>
    </Container>
  )
}

export default Header
