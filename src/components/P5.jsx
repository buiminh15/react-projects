import styled from "styled-components";

const Container = styled.span`
  font-family: "Open Sans";
  font-size: 1.6rem;
  font-weight: 600;
  line-height: ${(props) => props.lineHeight ?? "2.4rem"};
  letter-spacing: 0em;
  color: rgba(27, 28, 31, 0.75);
  margin-bottom: ${(props) => props.mb ?? "1.6rem"};

  text-align: ${(props) => props.textAlign ?? "center"};
  word-break: break-all;

  box-sizing: border-box;
`;

export default function P5({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
