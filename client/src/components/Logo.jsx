import React from 'react';
import styled from 'styled-components';

import logo from '../logo.svg';

const Wrapper = styled.a.attrs({
    className: '',
})`
span {
    min-width:270px;
}
`

const Logo = () => {
        return (
            <Wrapper href="/">
                <span className='d-block'><img src={logo} width="" height="auto" alt="MTNB" /></span>
            </Wrapper>
        )
}

export default Logo;
