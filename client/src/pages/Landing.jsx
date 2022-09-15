import React from 'react';
import styled from 'styled-components';

import { Hero, Gallery } from '../components';

const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
`

const Landing = () => {
  return (
    <Wrapper>
      <Hero />
      <Gallery />
    </Wrapper>
  )
}

export default Landing;
