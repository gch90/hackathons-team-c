import React from 'react';
import styled from 'styled-components';

import KeyReveal from '../components/KeyReveal';

const Enigma = () => {
  const firstStr = "Sous vos yeux se trouve une clé pour passer à la page suivante.";
  const secondStr = "Inscrivez là au bon endroit pour tenter d'avoir une place dans la Space.";
  const firstStrTransformed = firstStr.split('').reverse().join('') ;
  const secondStrTransformed = secondStr.split('').reverse().join('');

  return (
    <Wrapper>
      <ContainerTop>
        <Text>
          <FirstLine>{firstStrTransformed}</FirstLine>
          <SecondLine>{secondStrTransformed}</SecondLine>
        </Text>
      </ContainerTop>
      <ContainerBottom>
        <KeyReveal />
        <KeyText>/form</KeyText>
      </ContainerBottom>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContainerTop = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: 24px;
`;
const FirstLine = styled.p`
  margin-bottom: 10px; 
`;
const SecondLine = styled.p`
  margin-bottom: 10px; 
`;
const ContainerBottom = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: relative;
  cursor: none;
`;
const KeyText = styled.p`
  z-index: 200;
`;

export default Enigma;
