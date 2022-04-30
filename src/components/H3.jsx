import styled from "styled-components";

const Container = styled.span`
  font-family: "Lato";
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: 0em;
  color: #1b1c1f;
  text-align: ${(props) => props.textAlign ?? "center"};
  margin-bottom: ${(props) => props.mb ?? "1.6rem"};
`;

export default function H3({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
