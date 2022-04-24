import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import { AiOutlineTwitter } from "react-icons/ai";
import { IconContext } from "react-icons";

const Container = styled.footer`
  width: 100%;
  height: 477px;
  left: 0px;
  top: 3703px;

  position: absolute;
  bottom: 0;

  background: rgba(0, 0, 51, 0.95);
`;

const Wrapper = styled.div`
  max-width: 114rem;
  height: 243px;
  margin: 6rem auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoAddress = styled.div`
  display: flex;
  flex-direction: column;

  .address-road {
    width: 213px;
    height: 48px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;

const NavigationContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  .nav-item {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #ffffff;
  }
`;

const NavigationItem = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

const Connect = styled.div`
  .connect {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #ffffff;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
  }
`;

const Owner = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;

  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
`;
function Footer() {
  return (
    <Container>
      <Wrapper>
        <LogoAddress>
          <Logo textColor="white" />
          <span className="address-road">
            88/89 Peter Odili Road, Port Harcourt, Rivers State.
          </span>
        </LogoAddress>
        <NavigationContainer>
          <li className="nav-item">
            <NavigationItem to="/">Home</NavigationItem>
          </li>
          <li className="nav-item">
            <NavigationItem to="/">About</NavigationItem>
          </li>
          <li className="nav-item">
            <NavigationItem to="/">SignUp</NavigationItem>
          </li>
        </NavigationContainer>
        <NavigationContainer>
          <li className="nav-item">
            <NavigationItem to="/">Services</NavigationItem>
          </li>
          <li className="nav-item">
            <NavigationItem to="/">Contact</NavigationItem>
          </li>
          <li className="nav-item">
            <NavigationItem to="/">Privacy Policy</NavigationItem>
          </li>
        </NavigationContainer>
        <NavigationContainer></NavigationContainer>
        <Connect>
          <span className="connect">Connect With Us</span>
          <div className="icons">
            <IconContext.Provider value={{ size: "2rem", color: "white" }}>
              <AiOutlineTwitter />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "2rem", color: "white" }}>
              <AiOutlineTwitter />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "2rem", color: "white" }}>
              <AiOutlineTwitter />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "2rem", color: "white" }}>
              <AiOutlineTwitter />
            </IconContext.Provider>
          </div>
        </Connect>
      </Wrapper>

      <Owner>
        © Jo-Jean Imoh-Ita. All right reserved. Designed by AMANi Art
      </Owner>
    </Container>
  );
}

export default Footer;
