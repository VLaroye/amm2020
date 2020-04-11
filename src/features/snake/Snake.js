import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/SectionTitle';
import media from 'utils/media';

const Introduction = styled.div`
width: 100%;
color: white;
text-transform: uppercase;
font-family: 'Roboto';
margin: auto;
border: 1px solid white;

p {
	text-align: center;
	padding: 3em auto;	
}


${media.laptop`
      width: 50%;
	`}
	
`

const Snake = () => {
	return (
		<div>
			<SectionTitle text="Snake"/>
			<Introduction>
				<p>Défi le snake du AMM FEST et découvre en avant première les 3 premiers noms qui se produiront  au festival !</p>
			</Introduction>
		</div>
    )
}

export default Snake;