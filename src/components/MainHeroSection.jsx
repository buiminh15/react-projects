import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../utils/constant";
import MainImage from "./MainImage";
import ResultScore from "./ResultScore";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: calc(85.4rem - 6rem);
  width: 100%;

  .left-display {
    display: flex;
    flex: 1;
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

  .right-display {
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
      <div className="right-display">
        <MainImage
          row={11}
          col={7}
          altImg="image 1"
          imgLink={
            "https://s3-alpha-sig.figma.com/img/8327/b1f2/4b0ca4abd92da30bcf7b52c73af2dbdc?Expires=1651449600&Signature=SgDGStyVtULKTU7N2rwE6N089SXysJzDORyiKZHsr5QRx2yVJlXqmMl5Y8QtdACjccF1AYip0iLJhFSIhkDAOquiXHACARDjlpe8gcwIIooRHYhd7qQfXv3d5yKQoj5zGq8hHaI7jwc1-la~TYmdqaXMTR93dkykJXR~TeZag2CI4-TDd3aB9uRSdwTi~o1AuvDU-MlO7H74UtNiwMEKI1S4C78-C3-t3pwFS2wjKgOzRFFWvPKXaBQBql2M9j1~0mvzMdprefNpqnE9Xen4TtXU9ewEiNT58fqsYHLPgDfqZ1OQXgaOrQ7DrqVue4JR1zrhtOVEzTSlQg~rSd04Ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
        >
          <ResultScore percentage={60} bottom={"3rem"} left={"-3rem"} />
        </MainImage>
      </div>
    </Container>
  );
}

export default MainHeroSection;
