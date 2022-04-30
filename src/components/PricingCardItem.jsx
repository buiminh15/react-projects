import styled from "styled-components";
import H3 from "./H3";
import H4 from "./H4";
import P5 from "./P5";
import { hbDollar, hbCheckbox } from 'themes/Images';
import H1 from "./H1";
const Container = styled.div`
  width: 359px;
  height: auto;

  background: #ffffff;
  /* drop shadow feature */

  box-shadow: 0px 4px 34px rgba(27, 28, 31, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 358px;
  height: 229px;
  background: linear-gradient(291.38deg, #ffce40 2.24%, #f2a520 106.52%);
  border-radius: 10px;

  .price-container {
    position: relative;

    .dollar {
      position: absolute;
      left: -2rem;
    }
  }
`;

const WrapperList = styled.ul`
  padding: 3rem 3.2rem;
  width: 100%;

  box-sizing: border-box;
`

const WrapperButton = styled.div`
  padding: 0rem 3.2rem 3rem;
  width: 100%;

  box-sizing: border-box;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;


  margin-bottom: 1.6rem;
  :last-child {
    margin-bottom: 0rem;
  }
  .list-item {
  width: 2rem;
  height: 2rem;
      margin-right: 1.2rem;

  }
  
`;

const Button = styled.button`
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 28px;

width: 100%;
height: 56px;

background: #1B1C1F;
/* Shadow/sm */

box-shadow: 0px 1px 3px rgba(42, 51, 66, 0.06), 0px 1px 2px rgba(42, 51, 66, 0.03);
border-radius: 6px;
box-sizing: border-box;
cursor: pointer;
border: none;

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
/* identical to box height, or 156% */


/* Primary/050 */

color: #F0FDF4;
`;

export default function PricingCardItem({
  headerPackage,
  headerPayment,
  price,
  list
}) {
  return (
    <Container>
      <Header>
        <H4 mb={"0.8rem"}>Free</H4>
        <P5 mb={"1.3rem"}>Free forever</P5>
        <div className="price-container">
          <img
            className="dollar"
            src={hbDollar.src}
            alt={hbDollar.alt}
            srcset=""
          />
          <H1 className="price">60</H1>
        </div>
      </Header>
      <WrapperList>
        {
          Array(10).fill(1).map((item, index) => (
            <ListItem key={`item-${index}`}>
              <img className='list-item' src={hbCheckbox.src} alt={hbCheckbox.alt} srcset="" />
              <P5 mb={'0rem'}>{item}</P5>
            </ListItem>
          ))
        }
      </WrapperList>
      <WrapperButton>
        <Button>Get Started</Button>
      </WrapperButton>

    </Container>
  );
}
