import React from 'react';
import styled from 'styled-components';
import { Hero, Gallery, Prices, Distance, Footer } from '../components';

const Wrapper = styled.div`
  min-height: 100vh;
`

const Landing = () => {
  return (
    <Wrapper>
      <Footer />
      <Prices 
          suptitle="Prix"  
          title="Un prix spécialement pour vous"  
          text="Dépêchez vous! Avant que l'offre ne se termine..."  
          textFailed="Dommage, vous avez été trop lent, pour cette raison vous devrez payez plein prix..."  
          currency="DC"  
          min={54000}  
          max={289000}  
          link="Acheter un billet"  
          linkFailed="Ou pas..."  
          url="/enigma"  
        />
      <Distance />  
      <Gallery />
      <Hero />
    </Wrapper>
  )
}

export default Landing;
