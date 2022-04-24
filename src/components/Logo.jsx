import React from "react";
import styled from "styled-components";
import { SiAol } from "react-icons/si";
import { IconContext } from "react-icons";
import { COLORS } from "../utils/constant";
const Container = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  .logo-name {
    margin: 0 0 0 1rem;
    color: ${props => props.textColor}
  }
`;

function Logo({textColor='#000033'}) {
  return (
    <Container textColor={textColor}>
      <IconContext.Provider value={{ size: "6rem", color: "#029837" }}>
        <SiAol />
      </IconContext.Provider>
      <div>
        <h2 className="logo-name">Jo-Jean</h2>
        <h2 className="logo-name">Imo-Ith</h2>
      </div>
    </Container>
  );
}

export default Logo;
