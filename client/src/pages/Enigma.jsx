import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../const';

import KeyReveal from '../components/KeyReveal';

const Enigma = () => {
    const firstStr = "Trouver votre destination dans l'obscurité";
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
            <KeyReveal />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.blackColor};
  color: ${COLORS.whiteColor};
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
  font-size: 32px;
`;
const FirstLine = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;
const SecondLine = styled.p`
  margin-bottom: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export default Enigma;
