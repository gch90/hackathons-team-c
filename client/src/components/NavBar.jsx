import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'
import Button from './Button'

import { isSmallScreen } from '../const'


const Container = styled.div.attrs({
    className: 'container-fluid px-0 position-fixed w-100',
})`
    top:0px;
    left:50%;
    transform: translateX(-50%);
    z-index: 111;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg justify-content-between pt-3 pt-xl-5',
})`
    margin-bottom: 20 px;
`

const NavBar = () => {

    return (
        <Container>
            {!isSmallScreen ? 
                <Nav>
                <Logo />
                <Links />
                <Button
                    className="top-left-rounded main-color"
                    title="Acheter vos billets"
                    link="/enigma"
                    />
                </Nav>
            :
                <Nav>
                    <Logo />
                </Nav>  
            }
          
        </Container>
    )
}

export default NavBar
