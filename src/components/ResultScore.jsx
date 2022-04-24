import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Container = styled.div`
  position: absolute;
  top: ${(props) => props.top ?? ""};
  right: ${(props) => props.right ?? ""};
  bottom: ${(props) => props.bottom ?? ""};
  left: ${(props) => props.left ?? ""};

  background: white;
  width: 23.6rem;
  height: 11.6rem;
  max-width: 23.6rem;
  max-height: 11.6rem;
  border-radius: 1.76667rem;
  box-shadow: 0px 10px 25px rgba(2, 147, 52, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 3rem 2.4rem 3.8rem;
  box-sizing: border-box;

  .text-container {
    margin-left: 1rem;
    h2 {
      font-size: 2.2rem;
      line-height: 3.3rem;
      margin: 0;
    }
  }

  .circular-container {
    width: 6.8rem;
    height: 6.8rem;

    .CircularProgressbar-path {
      stroke: rgba(2, 152, 55, 0.7);
    }

    .CircularProgressbar-text {
      fill: #000033d9;
      font-size: 1.7rem;
      line-height: 2.4rem;
      font-weight: 500;
    }
  }
`;

function ResultScore({ percentage, ...rest }) {
  return (
    <Container {...rest}>
      <div className="circular-container">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      </div>
      <div className="text-container">
        <h2>Success</h2>
        <h2>Result</h2>
      </div>
    </Container>
  );
}

export default ResultScore;
