import styled from "styled-components";

const Container = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 79.2px;
  line-height: 99px;
  /* identical to box height, or 125% */

  letter-spacing: -0.02em;
  color: #1b1c1f;
`;

export default function H1({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
