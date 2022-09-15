import React, { Component } from 'react'
import styled from 'styled-components'

import Socials from './Socials'

import { COLORS } from '../const';

const FooterWrapper = styled.div.attrs({
    className: 'container-fluid py-3',
})`
    color:${COLORS.mainBorder};

    a {
        color:${COLORS.mainBorder};

        &:hover {
            color:${COLORS.mainBorder};
            text-decoration: underline;
        }
    }
`

const Row = styled.div.attrs({
    className: 'row justify-content-between',
})``

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <Row>
                    <div class="col-12 col-xl-auto text-center"><small>© Tous droits réservés - 2022</small></div>
                    <div class="col-12 col-xl-auto text-center">
                        <Socials />
                    </div>
                </Row>
            </FooterWrapper>
        )
    }
}

export default Footer