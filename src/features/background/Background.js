import React from 'react';
import styled from 'styled-components';

import fond from 'assets/fond.png';

const Image = styled.img`
  position:absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;
const Background = () => {
  return (
      <Image src={ fond } alt="fond"/>
    )
};

export default Background; 