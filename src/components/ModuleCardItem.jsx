import styled from "styled-components";
import H3 from "./H3";
import P5 from "./P5";

const Container = styled.div`
  width: 35.9rem;
  height: 28.8rem;

  background: #ffffff;
  /* drop shadow feature */

  box-shadow: 0px 4px 34px rgba(27, 28, 31, 0.1);
  box-sizing: border-box;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.2rem 4.4rem;

  .icon-module {
    width: 6.4rem;
    height: 6.4rem;

    background: #fbc028;
    border-radius: 6px;

    margin-bottom: 2.4rem;
  }
`;

export default function ModuleCardItem({ icon, alt, title, body }) {
  return (
    <Container>
      <img className="icon-module" src={icon} alt={alt} />
      <H3>{title}</H3>
      <P5>{body}</P5>
    </Container>
  );
}
