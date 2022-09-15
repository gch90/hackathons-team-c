import React, { Component } from 'react'
import styled from 'styled-components'

import { COLORS } from '../const'

import { isSmallScreen } from '../const'

import walkIco from '../person-walking-solid.png'

const Section = styled.section.attrs({
    className: 'container-fluid d-flex align-items-center flex-column justify-content-center w-100 my-5',
    id: 'le-voyage'
})`
    min-height:100vh;
`
const Row = styled.div.attrs({
    className: 'row w-100 my-3',
})``

const Subtitle = styled.span.attrs({
    className: 'suptitle d-block mainColor',
})``

const Col = styled.div.attrs({
    className: 'col-12 d-flex flex-column justify-content-center align-items-center text-center',
})``

const DivTravel = styled.div.attrs({
    className: 'col-12 d-flex justify-content-between align-items-center text-center flex-column flex-lg-row flex-lg-row-reverse px-0',
})``

const Planethoder = styled.div.attrs({
    className: 'd-flex align-items-center justify-content-center',
})`
    width:115px;
    height: 115px;
    border-radius: 50%;
    border:1px solid ${COLORS.mainBorder};

    &:nth-of-type(1) {
        border:1px solid ${COLORS.mainColor};
    }
`
const Line = styled.div.attrs({
    className: 'mx-3 position-relative',
})`
    height:1px;
    background-color:${COLORS.mainBorder};
    width: ${isSmallScreen ?  '1px' : '85%'};
    height: ${isSmallScreen ?  '1000vh' : '1px'};
`

const Traveler = styled.div.attrs({
    className: 'position-absolute pt-2',
})`
    transform: ${isSmallScreen ?  'rotate(-90deg);' : ''};
    width: ${isSmallScreen ?  '250px;' : ''};
    right: ${isSmallScreen ?  '-90px;' : ''}; 
    top: ${isSmallScreen ?  '50%' : ''}; 
`
class Distance extends Component {
    render() {
        return (
            <Section>
                <Row>
                    <Col>
                        <Subtitle>Le Voyage</Subtitle>
                        <h2>Les différentes étapes</h2>
                        <p className='text-center mx-0'>En fait il n'y a aucune étape...</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DivTravel>
                            <Planethoder>
                                <span>Mars</span>
                            </Planethoder>
                            <Line>
                                <Traveler>
                                    <img src={walkIco} alt="ico" />
                                    <small className='ml-2 text-uppercase'>132 000 000km</small>
                                </Traveler>
                            </Line>
                            <Planethoder>
                                <span>Terre</span>
                            </Planethoder>
                        </DivTravel>
                    </Col>
                </Row>
            </Section>
        )
    }
}

export default Distance