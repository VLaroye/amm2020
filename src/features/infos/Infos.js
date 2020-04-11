import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Card } from '@material-ui/core'; 
import media from 'utils/media';
import SectionTitle from 'components/SectionTitle';
import Tooltip from '@material-ui/core/Tooltip';

// ICONS 
import tente from 'assets/icons/tente.png';
import cine from 'assets/icons/cine.png';
import frite from 'assets/icons/frite.png';
import parking from 'assets/icons/parking.png';
import biere from 'assets/icons/biere.png';

const Info = styled.div``;

const Container = styled.div`
  width: 97%;
  height: 100%;
  margin-bottom:5em;

  ${media.laptop`
      width: 50%;
  `}
`;

const StyledCard = styled(Card)`
  border-radius: 0!important;
  background-color: #64e9a2!important;
  color: #042b26;

  iframe {
    width: 100%;
    height: 300px;

  ${media.tablet`
      width: 50%;
      height: 450px;
  `}
  }
`;

const GridContainer = styled(Grid)`
  display:flex;
  flex-direction:column;
  align-items:center;
  height: 100%;
  position:relative;
  color: white;
  background-color: #111025;
  font-family: 'Roboto condensed';

  ${media.tablet`
      flex-direction:row;
  `}
`;

const InformationSaturday = styled.div`
  width: 100%;
  display:flex;

  ${media.tablet`
    box-sizing: border-box;
    height: 100%;
    position:absolute;
    left: 50%;
    width: 50%;
  `} 

  .text {
    font-family: "Roboto";
    margin: auto 10%;
    width: 90%;

    ${media.tablet`
      margin: auto;
    `} 
  }

  div.textContainer {
    margin: 0;
    font-size: 0.9em;

    ${media.tablet`
      padding: 0.5em;
      margin: 0 0 0 10%;
      font-size: 0.9em;
    `} 

    ${media.laptop`
      padding:0.5em 15%;
      margin: 0 0 0 10%;
      font-size: 0.9em;
    `} 
  }
  
  #title {
    font-size: 1.2em;
    font-weight:900;
    letter-spacing:2px;
    font-weight: bold;
    margin: 0.6em auto;
  }

  #title1 {
    font-size: 1.2em;
    font-weight:900;
    letter-spacing:2px;
    font-weight: bold;
    margin: 0 auto 0.6em auto;
  }

  span {
    font-weight: bold;
  }

  #icons {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color:#3FAC98;
    min-width: 20%; 
  }

  .icon {
    margin: auto;
    width: 50px;
    height: 50px;
    padding: 0.4em;
  }
`;

const Tip= styled(Tooltip)`
  color: black;
  font-size: 2em;
  `;

const longText1 = `
Vente de boissons (alcool/soft). Alcool interdit à l’entrée du festival. Bouteille d’eau autorisée (sans bouchons).
`;

const longText2 = `
Restauration sur place (tu peux ramener ta pomme mais pas ton burger)
`;

const longText3 = `
Coin ciné à partir de 22h.
`;

const longText4 = `
Parking à proximité (attention à jeter vos mégots/déchets dans les poubelles) 
`;

const longText5 = `
Camping gratuit sur place pour la nuit du samedi.
`;

class Infos extends Component {
  state = {
    value: 1,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    return ( 
      <Info id="info">
        <SectionTitle text="Informations"/>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Container>
              <StyledCard>
                <GridContainer>
                  <InformationSaturday>
                    <div className="text">
                      <div className="textContainer">
                        <div id="title1">LIEU</div>
                        Terrain des Archers 
                        <br/>
                        Chemin Petit d'Hazebrouck
                        <br />
                        59114, STEENVOORDE
                        <br />
                        Parking à proximité
                      </div>
                      <div className="textContainer">
                        <div id="title">HORAIRES</div>
                        Ouverture : 
                        <span> 15h00</span> 
                        <br />
                        Fermeture :
                        <span> 3h00</span>
                      </div>
                      <div className="textContainer">
                        <div id="title">TARIF</div>                          
                        Prévente : <span>13€</span>                            
                        <br/>
                        Sur place : <span>15€</span>
                        <br/>
                        Gratuit pour les - de 12 ans
                      </div>
                      <div className="textContainer">
                        <div id="title">CAMPING</div>
                      </div>
                    </div>
                    <div id="icons">
                      <Tip title={longText1}>
                        <img src={ biere } className="icon" alt="tente"/>
                      </Tip>
                      <Tip title={longText2}>
                        <img src={ frite } className="icon" alt="tente"/>
                      </Tip>
                      <Tip title={longText3}>
                        <img src={ cine } className="icon" alt="tente"/>
                      </Tip>
                      <Tip title={longText4}>
                        <img src={ parking } className="icon" alt="tente"/>
                      </Tip>
                      <Tip title={longText5}>
                        <img src={ tente } className="icon" alt="tente"/>
                      </Tip>
                    </div>
                  </InformationSaturday>
                  <iframe title="carte Samedi" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10083.860534326544!2d2.556718469112891!3d50.81328467952719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dce62091f889a1%3A0x7ec7de275ff362a9!2sChemin+Petit+d&#39;Hazebrouck%2C+59114+Steenvoorde!5e0!3m2!1sfr!2sfr!4v1555489927534!5m2!1sfr!2sfr"/>
                </GridContainer> 
              </StyledCard>
            }
          </Container>
        </Grid>  
      </Info>
     )
  }
}

export default Infos;