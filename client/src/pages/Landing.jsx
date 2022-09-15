import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components';
import Prices from '../components/Prices';

const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`

const Landing = () => {
    return (
      <Wrapper>
        <NavBar />
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
      </Wrapper>
  )
}

export default Landing;
