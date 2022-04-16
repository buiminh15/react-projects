import React from 'react'
import styled from 'styled-components'
import { COLORS, IMAGES } from '../../utils/constants'
import { MdArrowDropDown } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
  span {
    margin: 0 0.6rem;
    font-size: 1.6rem;
  }
  .arrow-up {
    transform: translate(0px, -2px) rotate(-180deg);
    transition: transform 0.2s ease-in;
  }
  .arrow-down {
    transform: translate(0px, 2px) rotate(-360deg);
    transition: transform 0.2s ease-in;
  }
`

const MenuList = styled.div`
  position: absolute;
  right: 0;
  top: 3rem;
  z-index: 10;

  max-width: 16rem;
  width: 16rem;
  border-radius: 0.8rem;
  background-color: ${COLORS.white};
  box-shadow: rgb(28 28 28 / 15%) 0px 2px 8px;
  .menu-item {
    padding: 1rem;
    height: 4rem;
    box-sizing: border-box;
    span {
      font-size: 1.6rem;
      text-transform: capitalize;
    }
    &:hover {
      background-color: red;
    }
    &:first-child:hover {
      background-color: red;
      border-radius: 0.8rem 0.8rem 0 0;
    }
    &:last-child:hover {
      background-color: red;
      border-radius: 0 0 0.8rem 0.8rem;
    }
  }
`

function LoggedInUser({ user }) {
  const [toggle, setToggle] = React.useState(false)
  const ref = React.useRef()

  useOnClickOutside(ref, () => setToggle(false))
  return (
    <Container>
      <img src={user?.src || IMAGES.userIcon} alt="" />
      <span>{user?.name || 'Minh'}</span>
      <div className={toggle ? 'arrow-up' : 'arrow-down'}>
        <IconContext.Provider value={{ size: '3rem', color: 'black' }}>
          <MdArrowDropDown onClick={() => setToggle(!toggle)} />
        </IconContext.Provider>
      </div>
      {toggle && (
        <MenuList ref={ref}>
          {['test1', 'test2', 'test3'].map((item) => (
            <div className="menu-item" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </MenuList>
      )}
    </Container>
  )
}

export default LoggedInUser
