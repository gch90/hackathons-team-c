import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components'

const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
`

const Landing = () => {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  )
}

export default Landing;
