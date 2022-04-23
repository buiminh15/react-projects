import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../utils/constant";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-display {
    display: flex;
    flex-direction: column;

    width: 63rem;
    max-width: 63rem;
    .title {
      font-size: 5rem;
      line-height: 6.5rem;
      font-weight: 700;

      margin: 0;
    }

    .desc {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  }
`;

const Button = styled(Link)`
  text-decoration: none;

  background-color: ${COLORS.green};
  color: ${COLORS.white};

  border-radius: 2rem;
  border: none;

  padding: 1.4rem 2.1rem;

  font-size: 1.6rem;
  line-height: 2.6rem;

  width: 15.7rem;
  text-align: center;

  box-sizing: border-box;
`;

function MainHeroSection() {
  return (
    <Container>
      <div className="left-display">
        <h2 className="title">Marriage and Relationship Coaching</h2>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          quasi aliquid? Labore impedit deleniti possimus cupiditate assumenda
        </p>
        <Button to={"/"}>Book now</Button>
      </div>
    </Container>
  );
}

export default MainHeroSection;
