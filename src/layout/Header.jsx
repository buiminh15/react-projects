import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SiAol } from "react-icons/si";
import { IconContext } from "react-icons";
import clsx from 'clsx';

;
const Container = styled.div`
  width: 100%;

  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  h2 {
    margin:0 0 0 1rem;
  }

`;

const NavMenu = styled.nav`
  font-size: 1.4rem;
  line-height: 2.4rem;

  a {
    color: #000033;
    margin-right: 4.1rem;
    text-decoration: none;

    &:hover {
      text-underline-offset: 0.2rem;
      text-decoration: underline solid #000033 0.3rem;
    }
  }

  .active {
    text-underline-offset: 0.2rem;
    text-decoration: underline solid #000033 0.3rem;
  }

  .button {
    text-decoration: none;
    color: #029837;
    font-size: 1.4rem;

    padding: 1.4rem 2.1rem;
    margin-left: 2.4rem;

    border: 0.1rem solid #029837;
    border-radius: 2rem;

    &:hover {
      text-decoration: none;
    }
  }
`;


const menu = [
  {
    name: "Home",
    path: "/",
    type: 'link',
  },
  {
    name: "About",
    path: "/about",
    type: 'link',
  },
  {
    name: "Service",
    path: "/service",
    type: 'link',
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    type: 'button',
  },
];

function Header() {
  return (
    <Container>
      <Logo>
        <IconContext.Provider
          value={{ size: '5rem',  color: "#029837" }}
        >
            <SiAol />
        </IconContext.Provider>
        <div>
          <h2>Jo-Jean</h2>
          <h2>Imoh-Itah</h2>
        </div>
      </Logo>

      <NavMenu>
        {menu.map(({ name, path, type }) => (
          <NavLink
            className={clsx(({ isActive }) => (isActive ? "active" : ""), type === 'button' && 'button')}
            to={path}
          >
            {name}
          </NavLink>
        ))}
      </NavMenu>
    </Container>
  );
}

export default Header;
