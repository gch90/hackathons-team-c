import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';

const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
`

const Landing = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  )
}

export default Landing;
