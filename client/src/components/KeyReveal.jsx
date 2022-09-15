import React, {useState} from 'react';
import styled from 'styled-components';
import {COLORS} from '../const';

const KeyReveal = () => {

  const [cursorPosition, setCursorPosition] = useState({left: 0, top: 0});

  const handleCursor = (e) => {
    setCursorPosition({left: e.clientX, top: e.clientY});
  }
  
  return (
    <Wrapper onMouseMove={(e) => handleCursor(e)}>
      <RevealCircle style={{left: `${cursorPosition.left}px`, top: `${cursorPosition.top}px`}}/>
      <Text>/form</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.blackColor};
  position: relative;
  cursor: none;
`;
const RevealCircle = styled.div`
  background-color: ${COLORS.mainColor};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  z-index: 100;
`;
const Text = styled.p`
  position: absolute;
  bottom: 20px;
  right: 115px;
  z-index: 200;
`;

export default KeyReveal;
