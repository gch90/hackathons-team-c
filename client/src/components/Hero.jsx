import React from 'react';
import styled from 'styled-components';

import imgMars from '../mars.png';

import { isSmallScreen } from '../const'

import Button from './Button';

const Section = styled.section.attrs({
    className: 'container d-flex align-items-center justify-content-center w-100 my-5',
    id: "a-propos"
})`
    min-height:100vh;

    img {
        left: ${isSmallScreen ?  '-300px' : '-400px'};
        max-width: ${isSmallScreen ?  '400px' : '800px'};
    }
`;
const Row = styled.div.attrs({
    className: 'row w-100',
})``;

const Col = styled.div.attrs({
    className: 'col-12 col-xl-10 offset-xl-2',
})``;

const Hero = () => {
        return (
            <Section>
                <img className="position-absolute" src={imgMars} width="800" alt="mars" />
                <Row>
                    <Col>
                        <h2>Le premier voyage vers Mars entre vos mains...</h2>
                        <p>Ne ratez pas votre chance et achetez votre billet pour la grande odyssée vers les terres arides de mars.</p>
                    </Col>
                </Row>
            </Section>
        )
}

export default Hero;
