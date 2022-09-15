import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components'
import { Hero } from '../components'

const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
`

const Landing = () => {
  return (
    <Wrapper>
      <NavBar />
      <Hero />
    </Wrapper>
  )
}

export default Landing;
