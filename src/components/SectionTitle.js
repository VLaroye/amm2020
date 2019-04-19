import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const Title = styled.h1`
  font-family: 'Big John';
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  color: white;
  font-size: 2em;
  margin-top: 2em ;
`;

const SectionTitle = ({ text }) => {
  return (
    <ScrollAnimation animateIn='slideInLeft' animateOnce offset={0}>
      <Title>{text}</Title>
    </ScrollAnimation>   
  );
};

export default SectionTitle;