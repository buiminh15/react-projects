import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, minmax(1.3rem, 1.3rem));
  grid-template-rows: repeat(${(props) => props.row}, minmax(1.3rem, 1.3rem));
  gap: 2.3rem 0.9rem;

  .dot {
    height: 1.3rem;
    width: 1.3rem;
    background-color: rgba(0, 0, 51, 0.15);
    border-radius: 50%;
    display: inline-block;
  }
`;

function Dots({ row = 1, col = 1 }) {
  return (
    <Container row={row} col={col}>
      {Array(row * col)
        .fill(1)
        .map((_, index) => (
          <span className="dot" key={`${index}`}/>
        ))}
    </Container>
  );
}

export default Dots;
