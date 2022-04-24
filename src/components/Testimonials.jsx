import React from "react";
import styled from "styled-components";
import { COLORS } from "../utils/constant";
import CardContainer from "./CardContainer";
import Dots from "./Dots";
import Quote from "./Quote";

const Container = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 66.3rem;

  background: ${COLORS.lightWhite};

  .title-section {
    font-size: 3.5rem;
    line-height: 5.25rem;
    font-weight: 700;

    margin-top: 9rem;

    width: 44.6rem;
    text-align: center;
  }

  .dots-top {
    position: absolute;
    top: 0;
    right: 0;
  }

  
  .dots-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const menu = [
  {
    name: "test",
    location: "USA",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quam laborum deleniti tenetur quisquam rerum illo autem, inventore facere voluptatem!",
  },
  {
    name: "test",
    location: "USA",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quam laborum deleniti tenetur quisquam rerum illo autem, inventore facere voluptatem!",
  },
  {
    name: "test",
    location: "USA",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quam laborum deleniti tenetur quisquam rerum illo autem, inventore facere voluptatem!",
  },
];

function Testimonials() {
  return (
    <Container>
      <h2 className="title-section">What our customers say about us</h2>
      <div className="dots-top">
        <Dots row={4} col={4} />
      </div>
      <div className="dots-bottom">
        <Dots row={4} col={4} />
      </div>
      <CardContainer>
        {menu.map((item, index) => (
          <Quote
            key={`${index}`}
            name={item.name}
            location={item.location}
            body={item.body}
          ></Quote>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Testimonials;
