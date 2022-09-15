import React from 'react';
import styled from 'styled-components';

import imgMars from '../mars.png';

import Button from './Button';

const Section = styled.section.attrs({
    className: 'container d-flex align-items-center justify-content-center w-100 my-5',
})`
    min-height:100vh;

    img {
        left:-400px;
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
                    <h2 className="m-0">Le premier voyage vers Mars entre vos mains...</h2>
                    <p className="my-4">Ne ratez pas votre chance et achetez votre billet pour la grande odyssée vers les terres arides de mars.</p>
                    <Button
                        className="main-color d-inline-block"
                        title="Acheter vos billets"
                        link="/enigma"
                    />
                </Col>
            </Row>
        </Section>
    )
}

export default Hero;
