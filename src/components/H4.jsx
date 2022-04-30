import styled from "styled-components";

const Container = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0em;
  color: #1b1c1f;
  text-align: ${(props) => props.textAlign ?? "center"};
  margin-bottom: ${(props) => props.mb ?? "1.6rem"};

  box-sizing: border-box;
`;

export default function H4({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
