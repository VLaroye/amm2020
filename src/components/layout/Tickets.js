import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  font-family: 'Roboto Condensed';
  background: rgb(132,171,104);
  background: linear-gradient(180deg, #795d86 0%, #998068 80%);
  position:fixed;
  z-index: 2;
  right: 0%;
  text-transform: uppercase;
  color:white;
  font-size: 1em;
  font-weight: bold;
  padding: 2em;
  border-radius: 0 0 0 15px;
  cursor: pointer;

  ${media.laptop`
    padding: 1.6em;
  `}

  ${media.xxl`
    padding: 1.6em;
    font-size: 1.5em;
  `}

  a, a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Tickets = () => {
  return (
    <a href="https://www.weezevent.com/amm-fest-5" target="_blank" rel="noopener noreferrer">
      <Container>
        Billetterie
      </Container>
    </a>
  )
}

export default Tickets;
