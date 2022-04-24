import React from "react";
import styled from "styled-components";
import { COLORS } from "../utils/constant";
import MainImage from "./MainImage";
import { AiFillCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  align-items: center;
  background: ${COLORS.lightWhite};

  width: 100%;
  height: 79.8rem;

  .left-display {
    flex: 1;
    position: relative;
    width: 54.7rem;
    height: 53.664rem;
  }
  .right-display {
    flex: 1;

    .wrapper {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 2.5rem;
        line-height: 3.75rem;
        font-weight: 700;
        margin: 0;
      }

      p {
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 400;
        color: #000033f2;
      }
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding:0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  span {
    margin-left: 1rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

const Button = styled(Link)`
  text-decoration: none;

  background-color: transparent;
  color: ${COLORS.green};
  margin-top: 4.4rem;

  border-radius: 2rem;
  border: 0.2rem solid ${COLORS.green};

  padding: 1.4rem 2.1rem;

  font-size: 1.6rem;
  line-height: 2.6rem;

  width: 15.7rem;
  text-align: center;

  box-sizing: border-box;
`;

const listMenu = [
  "Post Marital Coaching",
  "Post Marital Coaching",
  "Post Marital Coaching",
];

function HeroSection() {
  return (
    <Container>
      <div className="left-display">
        <MainImage
          row={11}
          col={7}
          altImg="image 1"
          imgLink={
            "https://s3-alpha-sig.figma.com/img/8327/b1f2/4b0ca4abd92da30bcf7b52c73af2dbdc?Expires=1651449600&Signature=SgDGStyVtULKTU7N2rwE6N089SXysJzDORyiKZHsr5QRx2yVJlXqmMl5Y8QtdACjccF1AYip0iLJhFSIhkDAOquiXHACARDjlpe8gcwIIooRHYhd7qQfXv3d5yKQoj5zGq8hHaI7jwc1-la~TYmdqaXMTR93dkykJXR~TeZag2CI4-TDd3aB9uRSdwTi~o1AuvDU-MlO7H74UtNiwMEKI1S4C78-C3-t3pwFS2wjKgOzRFFWvPKXaBQBql2M9j1~0mvzMdprefNpqnE9Xen4TtXU9ewEiNT58fqsYHLPgDfqZ1OQXgaOrQ7DrqVue4JR1zrhtOVEzTSlQg~rSd04Ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
        ></MainImage>
      </div>
      <div className="right-display">
        <div className="wrapper">
          <h3>We offer the best services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum
            blanditiis minus commodi nisi ex dolore molestiae minima soluta hic.
          </p>
          <List>
            {listMenu.map((item, index) => (
              <ListItem key={`${index}`}>
                <IconContext.Provider
                  value={{ size: "2rem", color: "#029837" }}
                >
                  <AiFillCheckCircle />
                </IconContext.Provider>
                <span>{item}</span>
              </ListItem>
            ))}
          </List>
          <Button to={"/"}>Book now</Button>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
