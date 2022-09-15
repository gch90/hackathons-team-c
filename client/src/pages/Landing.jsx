import React from 'react';
import styled from 'styled-components';
import { Hero, Gallery } from '../components';
import Prices from '../components/Prices';

const Wrapper = styled.div`
  min-height: 100vh;
`

const Landing = () => {
  return (
    <Wrapper>
      <Prices 
          suptitle="Prix"  
          title="Un prix spécialement pour vous"  
          text="Dépêchez vous! Avant que l'offre se termine..."  
          currency="DC"  
          min={54000}  
          max={289000}  
          link="Acheter un billet"  
          url="/enigma"  
        />
      <Gallery />
      <Hero />
    </Wrapper>
  )
}

export default Landing;
