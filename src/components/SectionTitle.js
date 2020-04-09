import React, { useState } from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Title = styled.h1`
  font-family: 'Big John';
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  color: white;
  font-size: 2em;
  margin-top: 2em;
  transition: all 2s;


  ${media.xl`
    font-size: 2.6em;
  `}
`;

const SectionTitle = ({ text }) => {
  const [isActive, activate] = useState(true);

  setTimeout(() => {
    activate(!isActive);
  }, 5000);

  return (
    <Title>{text}</Title> 
  );
};

export default SectionTitle;