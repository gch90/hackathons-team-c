import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: '',
})`
span {
    min-width:270px;
}
`

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <span className='d-block'><img src={logo} width="120" height="20" alt="MTNB" /></span>
            </Wrapper>
        )
    }
}

export default Logo
