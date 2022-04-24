import React from "react";
import styled from "styled-components";
import Dots from "./Dots";

const Container = styled.div`
  position: relative;

  width: 54.7rem;
  height: 53.664rem;

  .container-dots {
    position: absolute;

    left: 3rem;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;

    width: 51.7rem;
    height: 53.664rem;

    object-fit: cover;
    border-radius: 213.531px 0px 218.785px 216px;
    box-shadow: 0px 11.134571075439453px 18.557619094848633px 0px #0293340d;
    filter: drop-shadow(0px 1.11346rem 1.85576rem rgba(2, 147, 52, 0.05));
  }
`;

function MainImage({ children, row, col, imgLink ,altImg ,...rest }) {
  return (
    <Container {...rest}>
      <div className="container-dots">
        <Dots row={row} col={col} />
      </div>

      <img
        alt={altImg}
        src={imgLink}
      />
      {children}
    </Container>
  );
}

export default MainImage;
