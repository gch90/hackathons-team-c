import React, { Component } from 'react'
import styled from 'styled-components'

import Socials from './Socials'

const FooterWrapper = styled.div.attrs({
    className: 'container-fluid py-3',
})``

const Row = styled.div.attrs({
    className: 'row justify-content-between',
})``

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <Row>
                    <div class="col-auto"><small>© Tous droits réservés - 2022</small></div>
                    <div class="col-auto">
                        <Socials />
                    </div>
                </Row>
            </FooterWrapper>
        )
    }
}

export default Footer