import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  width: 100%;
  margin-top: 10em;
`;

const DateContainer = styled.div`
  display: flex;
  position: relative;
  left: 30%;
  text-transform: uppercase;

  ${media.tablet`
    left: 50%;
  `}

  #name {
    color: white;
    background-color: #111025;
    padding: 0 5rem 0 1.5rem;
    text-align: justify;
    font-size: 2em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    line-height: 1em;

    ${media.desktop`
    padding: 1rem 9rem 1rem 2rem;
    font-size: 3em;
  `}
  }

  #date {
    position: relative;
    right: 3em;
    width: 6em;
    height: 6em;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #111025;
    box-shadow: -3px 0 15px #411D7B;
    background: rgb(132,171,104);
    background: linear-gradient(135deg, rgba(132,171,104,1) 0%, rgba(63,172,152,1) 46%);

    ${media.desktop`
      right: 5em;
      width: 11em;
      height: 11em;
    `}

    span {
      font-weight: bold;
      font-size: 3em;
      line-height: 0.8em;

      ${media.desktop`
        font-size: 6em;
      `}
    }
  }
`
const Social = styled.div`
  a {
    color: inherit;
  }

  .logo {
    display: flex;
    flex-direction: row;
    color: white;
    position: relative;
    left: 45%;
    font-size: 2em;
    margin-top: 0.5em;
    ${media.tablet`
    margin-left: 4em;
    display: flex;  
  `}

  ${media.tablet`
   left: 40%
  `}

  ${media.desktop`
    left: 60%
  `}

  ${media.xxl`
    left: 50%
  `}
  }

  .icon {
    padding-right: 0.3em;
  }

  #facebook, #instagram, #youtube, #twitter {
    transition: 0.8s;
  }

  #facebook:hover {
    color: #3C5A99;
  }

  #instagram:hover {
    color: #8a3ab9;
  }

  #youtube:hover {
    color: #FF0000;
  }

  #twitter:hover {
    color: #38A1F3;
  }
`;

const Header = () => {
  return (
    <Container>
      <DateContainer>
        <div id="name">
          <span>AMM</span><span>Fest</span>
        </div>
        <div id="date">
          <span>25</span> Juillet
        </div>
      </DateContainer>
      <Social>
        <div className="logo">
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={400}>
            <a href='https://www.facebook.com/AMM.artmassandmess/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="facebook" icon={['fab', 'facebook-square']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={600}>
            <a href='https://www.instagram.com/amm_fest/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="instagram" icon={['fab', 'instagram']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={800}>
            <a href='https://www.youtube.com/channel/UCyc6lWpR1mbZ5YMcIJ6VCKw/featured?disable_polymer=1/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="youtube" icon={['fab', 'youtube']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={1000}>
            <a href='https://twitter.com/ArtMassMess/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="twitter" icon={['fab', 'twitter']} />
            </a>
          </ScrollAnimation>   
        </div>
      </Social>
    </Container>
  )
};

export default Header;

/*const Text = styled.div`
  color: white;
  position: relative;
  margin: 10em 2rem 2rem 2rem;
  font-family: 'Roboto Condensed';

  a {
    text-decoration: none;
    color: inherit;
  }

  ${media.tablet`
    margin-left: 4em;  
  `}

  ${media.desktop`
    margin-left: 15%;  
    margin-bottom: 10rem;
  `}

  ${media.xxl`
    margin: 15rem 20%;
  `}

  p {
    text-align: end;
    box-sizing: border-box;
    margin: 0.5em;
    font-size: 1em;
    max-width: 20rem;

    ${media.desktop`
    max-width: 30rem;
    font-size: 2em;
    `}
    
    ${media.xxl`
      max-width: 40rem;
    `}

  }`;


const Actuality = styled.div`
  font-family: 'Roboto Condensed';
  text-transform: uppercase;
  background-color: #00210b;
  position: relative;
  text-align: left;
  padding: 0.3em 0.5em;
  border-radius: 10px;
  font-weight: bold;
  max-width: 20rem;
  font-size: 1.3em;

  ${media.tablet`
    font-size: 1.5em;
  `}

  ${media.desktop`
    font-size: 2.8em;  
    max-width: 30rem;
  `}

  ${media.xxl`
    max-width: 40rem;
  `}

  .heart {
    padding-right: 0.5em;
    color: #64e7a1;
  }
`;

const Social = styled.div``;

const Container = styled.div`
  display: flex;

  a {
    color: inherit;
  }

  .logo {
    display:none;
    flex-direction: column;
    align-items: center;
    color: white;
    position: relative;
    margin: 4em 2rem 2rem 2rem;
    font-size: 2.2em;
    

    ${media.tablet`
    margin-left: 4em;
    display: flex;  
  `}

  ${media.desktop`
    margin-left: 15%;  
    margin-bottom: 10rem;
  `}

  ${media.xxl`
    margin: 15rem 20%;
  `}
  }

  .icon {
    padding-bottom: 0.3em;
  }

  #facebook, #instagram, #youtube, #twitter {
    transition: 0.8s;
  }

  #facebook:hover {
    color: #3C5A99;
  }

  #instagram:hover {
    color: #8a3ab9;
  }

  #youtube:hover {
    color: #FF0000;
  }

  #twitter:hover {
    color: #38A1F3;
  }
`;


const Header = () => {
  return (
    <Container>
      <Text>
        <p>#AMMFEST</p>
        <a href="https://www.weezevent.com/amm-fest-5" target="_blank" rel="noopener noreferrer">
          <Actuality>
            <FontAwesomeIcon className="heart" icon={['fa', 'heart']} />
            billetterie online ! 
          </Actuality>
        </a>
        <p>19 - 20 JUILLET 2019</p>
      </Text>
      <Social>
        <div className="logo">
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={400}>
            <a href='https://www.facebook.com/AMM.artmassandmess/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="facebook" icon={['fab', 'facebook-square']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={600}>
            <a href='https://www.instagram.com/amm_fest/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="instagram" icon={['fab', 'instagram']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={800}>
            <a href='https://www.youtube.com/channel/UCyc6lWpR1mbZ5YMcIJ6VCKw/featured?disable_polymer=1/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="youtube" icon={['fab', 'youtube']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={1000}>
            <a href='https://twitter.com/ArtMassMess/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="twitter" icon={['fab', 'twitter']} />
            </a>
          </ScrollAnimation>   
        </div>
      </Social>
    </Container>
    )
};

export default Header;
*/