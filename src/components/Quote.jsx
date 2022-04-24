import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { ImQuotesRight } from "react-icons/im";
import { COLORS } from "../utils/constant";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 10px 25px rgba(0, 0, 51, 0.08);
  border-radius: 20px;

  padding: 3.2rem 2.1rem
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .avatar {
    display: flex;
    align-items: center;

    .avatar-img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;

      object-fit: cover;
    }
    .avatar-info {
      display: flex;
      flex-direction: column;
      margin-left: 2rem;
      .avatar-info--name {
        font-family: "Ubuntu";
        font-style: normal;
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 2rem;
        flex: 1;

        color: #000033;
      }
      .avatar-info--location {
        font-family: "Ubuntu";
        font-style: normal;
        font-weight: 200;
        font-size: 1.3rem;
        line-height: 2rem;
        flex: 1;

        color: rgba(0, 0, 51, 0.95);
      }
    }
  }
`;

const Body = styled.p`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 2.6rem;

  color: rgba(0, 0, 51, 0.95);
`;

function Quote({ name, location, body }) {
  return (
    <Container>
      <Header>
        <div className="avatar">
          <img
            className="avatar-img"
            src="https://s3-alpha-sig.figma.com/img/3141/9eb7/5da0685274eaf9affbb36e93ad30f684?Expires=1651449600&Signature=J07jc~g04reZVQ~snRxxVHoYSFnYbsLMGLDaSO0~fsbttlLS1eVS~Saw6b5jrf2Qdgj-7UpNoWug8g03pfmFUOqNirUHdqaawRPVoOCoz9mTmMiX2mSQ6D8eXImAnP3nKoPaLqbx5lo4POCqPc5AMesGr1b0vyHwRYuci1Wj9HvKbgw8iyjEp5H-BwMNbWbigf3J3YfbZTpv22PySDd1YHGPgexTAqrCgou~dNkoDlp-wI0rLeWkhPuqeJU0YgloGyi~TGmSDjW~2RfehRXHjyEHdklLaj-0qNYNJnSiObWWDDZkQ0OWf-oQ6Bme0laEF3nMNEfUuzAOsBWFxezMRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="avatar"
          />
          <div className="avatar-info">
            <span className="avatar-info--name">{name}</span>
            <span className="avatar-info--location">{location}</span>
          </div>
        </div>
        <IconContext.Provider value={{ size: "2rem", color: COLORS.green }}>
          <ImQuotesRight />
        </IconContext.Provider>
      </Header>
      <Body>{body}</Body>
    </Container>
  );
}

export default Quote;
