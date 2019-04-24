import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import findIndex from 'lodash/findIndex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Footer from 'features/footer/Footer';

// ARTISTS
import ARTISTS from 'constants.js';

const Container = styled.div`
  margin: 8em auto;
  background-color: white;
  box-shadow: 5px 30px 100px #245d3d;
  width: 100%;

  a, a:visited {
    color: inherit;
  }

  .videoContainer {
    position: relative;
    padding-bottom: 56.25% /* 16:9 */;
    padding-top: 25;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${media.laptop`
    width: 80%;
  `}

  ${media.xxl`
    width: 70%;
  `}
`;

const ArtistImg = styled.img`
  display: flex;
  margin: auto;
  width: 100%;
`;

const TextContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto auto auto;

  grid-template-areas:
    "name"
    "style"
    "social"
    "description"
    "arrows"; 

  .arrows {
    grid-area: arrows;

    width: 40%;
    display: flex;
    justify-content: space-between;

    margin: 1em auto;
    font-size: 2.5em;

    ${media.tablet`
      width: 30%;
      margin: 3rem auto;
    `}

    ${media.xl`
      margin: 0;
      position: absolute;
      left: 2.5%;
      display: block;
      width: 95%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  }

  ${media.desktop`
    margin: 3em auto 1em auto;
  `}

  ${media.xl`
    margin: 8em auto;
    grid-template-columns: 10% 55% 25% 10%;
    grid-template-rows: auto auto auto;

    grid-template-areas:
      ". name . ."
      ". style social ."
      ". description description ."; 
  `}

  ${media.xxl`
    margin: 8em auto;
    grid-template-columns: 15% 50% 20% 15%;
  `}
`;

const ArtistName = styled.div`
  width: 90%;
  margin: auto;
  padding: 0.5em 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2em;
  font-weight: 900;
  color: #BC9142;
  
  grid-area: name;

  ${media.xl`
    padding: 0;
  `}
`;

const ArtistStyle = styled.div `
  padding: 0.2em 0;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 900;
  color: white;
  background-color: black;
  text-align: center;
  letter-spacing: 2px;

  grid-area: style;

  ${media.xl`
    height: 1.5em;
    transform: translateY(-50%);
    position: relative;
    top: 50%;
    width: 100%;
    margin: 0 auto;
    padding: 0.5em 0 0.3em 0;
  `}
`;

const SocialIcons = styled.div`
  margin: 1em 0;
  font-size: 3em;
  text-align: center;

  grid-area: social;

  .link {
    padding: 0 0.2em;
  }

  ${media.tablet`
    margin: 3rem 0;
    font-size: 4em;
  `}

  ${media.xl`
    margin: 0;
    font-size: 2.5em;
  `}
`;

const DescriptionContainer = styled.div `
  width: 80%;
  text-align: justify;
  margin: auto;

  p {
    margin: 0;
  }

  .descriptionFirst, .descriptionSecond {
    letter-spacing: 1px;
    font-size: 0.9em;
  }

  .descriptionSecond {
    margin-top: 1em;
  }

  grid-area: description;

  ${media.tablet`
    font-size: 1.2em;
  `}

  ${media.xl`
    width: 100%;
    margin: 1em auto 0 auto;
  `}
`;

const Artist = ({ match }) => {
  const artistsArray = Object.values(ARTISTS);
  const artistIndex = findIndex(artistsArray, artist => artist.id === match.params.id);
  const artist = artistsArray[artistIndex];

  const prevLink = artistsArray[artistIndex-1] ? artistsArray[artistIndex-1].id : artistsArray[artistsArray.length-1].id;
  const nextLink = artistsArray[artistIndex+1] ? artistsArray[artistIndex+1].id : artistsArray[0].id;

  return (
    <Fragment>
      <Container>
        <ArtistImg src={ artist.artistImg } alt={ artist.name }/>
        <TextContainer>
          <ArtistName>{ artist.name }</ArtistName>
          <ArtistStyle>{ artist.style }</ArtistStyle>        
          <SocialIcons>
            {artist.links.site ? <a href={ artist.links.site } className="link">
              <FontAwesomeIcon icon={['fa', 'globe-americas']} />
            </a> : null}
            {artist.links.soundcloud ? <a href={ artist.links.soundcloud } className="link">
              <FontAwesomeIcon icon={['fab', 'soundcloud']} color="#FE5000"/>
            </a> : null}
            {artist.links.facebook ? <a href={ artist.links.facebook } className="link">
              <FontAwesomeIcon icon={['fab', 'facebook-square']} color="#3C5A99"/>
            </a> : null}
            {artist.links.youtube ? <a href={ artist.links.youtube } className="link">
              <FontAwesomeIcon icon={['fab', 'youtube']} color="#FF0000"/>
            </a> : null}
          </SocialIcons>
          <DescriptionContainer>
            <p className="descriptionFirst">{ artist.description.first }</p>
            <p className="descriptionSecond">{ artist.description.second }</p>      
          </DescriptionContainer>
          <div className="arrows">
            <Link to={`/artiste/${prevLink}`}>
              <FontAwesomeIcon className="iconLeft" icon={['fa', 'chevron-left']} />
            </Link>
            <Link to={`/artiste/${nextLink}`}>
              <FontAwesomeIcon className="iconRight" icon={['fa', 'chevron-right']} />
            </Link>
          </div>
        </TextContainer>
        <YouTube 
          videoId={artist.video}
          className="video"
          containerClassName="videoContainer"
        />
      </Container>
      <Footer />
    </Fragment>
    
  )
}

export default Artist;