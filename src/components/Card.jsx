import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiBigDiamondRing } from "react-icons/gi";

const Container = styled.div`
  width: 38.7rem;
  height: 40.5rem;
  box-sizing: border-box;

  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
  border-radius: 2rem;

  padding: 4.4rem 3.5rem;
  display: flex;
  flex-direction: column;

  .ring {
    width: 6.5rem;
    height: 5.3rem;

    background: rgba(2, 152, 55, 0.1);
    border-radius: 6.54321px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-card {
    width: 159px;
    height: 30px;

    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
  }
  .desc-card {
    width: 315px;
    height: 104px;

    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2.6rem;

    color: rgba(0, 0, 51, 0.95);
    text-align: start;
    margin: 0;
  }
`;

function Card({ title, desc, children }) {
  return (
    <Container>
      <div className="ring">
        <IconContext.Provider value={{ size: "2rem" }}>
          <GiBigDiamondRing />
        </IconContext.Provider>
      </div>
      <h3 className="title-card">{title}</h3>
      <p className="desc-card">{desc}</p>
      {children}
    </Container>
  );
}

export default Card;
