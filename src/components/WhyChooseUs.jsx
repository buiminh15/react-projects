import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { COLORS } from '../utils/constant';
import Card from './Card';
import CardContainer from './CardContainer';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 88rem;

  h2 {
    font-size: 3.5rem;
    line-height: 5.25rem;
    font-weight: 700;

    width: 50.9rem;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 300;

    width: 59.8rem;
    text-align: center;
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

  width: fit-content;
  text-align: center;

  box-sizing: border-box;
`;


const menu = [
  {
    title: 'Virtual Coaching',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dolore.',
  },
  {
    title: 'Virtual Coaching',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dolore.',
  },
  {
    title: 'Virtual Coaching',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dolore. sum dolor sit amet, consectetur adipisicing elit. Odio, dolore.',
  },
]

function WhyChooseUs() {
  return (
    <Container>
      <h2>The Perfect Solution to your Relationship Issues</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, consequatur.</p>
    
      <CardContainer>
        {menu.map((item, index) => (
          <Card key={`${index}`} title={item.title} desc={item.desc}>
            <Button to={"/"}>Learn More</Button>
          </Card>
        ))}
      </CardContainer>
    </Container>
  )
}

export default WhyChooseUs