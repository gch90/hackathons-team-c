import React, {useEffect} from 'react';
import styled from 'styled-components';

const KeyReveal = () => {

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const revealCircle = document.getElementById('key-reveal');
      let left = e.offsetX;
      let top = e.offsetY;
      revealCircle.style.left = left + 'px';
      revealCircle.style.top = top + 'px';
    });
  }, [])
  
  return (
    <Wrapper id='key-reveal' />
  )
}

const Wrapper= styled.div`
  background-color: orange;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  z-index: 100;
`;

export default KeyReveal;
