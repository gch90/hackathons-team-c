import React, { Component } from 'react'
import styled from 'styled-components'

import { COLORS } from '../const'


import { isSmallScreen } from '../const'

import galleryImg1 from '../gallery-img-1.png'
import galleryImg2 from '../gallery-img-2.png'
import galleryImg3 from '../gallery-img-3.png'
import galleryImg4 from '../gallery-img-4.png'

const Section = styled.section.attrs({
    className: 'container-fluid d-flex align-items-center flex-column justify-content-center w-100 my-5',
})`
    min-height:100vh;
`
const Row = styled.div.attrs({
    className: 'row w-100 my-3',
})``

const Row2 = styled.div.attrs({
    className: 'row w-100 my-3',
})``

const Col = styled.div.attrs({
    className: 'col-12',
})``

const Col2 = styled.div.attrs({
    className: 'col-6 col-xl-3 d-flex justify-content-center',
})`

  &:nth-of-type(1) {
    margin-top:60px;

    .img-wrapper {

        &:before {
            content: " ";
            width: 95px;
            height: 1px;
            top: 0;
            left: 0;
            background-color: ${COLORS.mainBorder};        
            position:absolute;
        }

        &:after {
            content: " ";
            width: 1px;
            height: 95px;
            top: 0;
            left: 0;
            background-color: ${COLORS.mainBorder};        
            position:absolute;
        }
    }

  }

  &:nth-of-type(2) {
    margin-top: ${isSmallScreen ?  '120px' : '190px;'}; 
  }

  &:nth-of-type(3) {

    .img-wrapper {
        height: max-content;

        &:before {
            content: " ";
            width: 95px;
            height: 1px;
            bottom: 0;
            right: 0;
            background-color: ${COLORS.mainBorder};        
            position:absolute;
        }

        &:after {
            content: " ";
            width: 1px;
            height: 95px;
            bottom: 0;
            right: 0;
            background-color: ${COLORS.mainBorder};        
            position:absolute;
        }
    }
  }

  &:nth-of-type(4) {
    margin-top: ${isSmallScreen ?  '60px' : '245px;'}; 
  }
`

const Subtitle = styled.span.attrs({
    className: 'suptitle d-block mainColor',
})``

const ImgHolder = styled.div.attrs({
    className: 'img-wrapper position-relative p-4',
})`

    img {
        max-width: ${isSmallScreen ?  '100%' : ''}; 
    }
`

class Gallery extends Component {
    render() {
        return (
            <Section>
                <Row>
                    <Col>
                        <Subtitle>Mars</Subtitle>
                        <h2>Une planète remplie de<br />mystères à découvrir...</h2>
                    </Col>
                </Row>
                <Row2>
                    <Col2>
                        <ImgHolder><img src={galleryImg1} width="325" alt="Mars 1" /></ImgHolder>
                    </Col2>
                    <Col2>
                        <ImgHolder><img src={galleryImg2} width="325" alt="Mars 2" /></ImgHolder>
                    </Col2>
                    <Col2>
                        <ImgHolder><img src={galleryImg3} width="325" alt="Mars 3" /></ImgHolder>
                    </Col2>
                    <Col2>
                        <ImgHolder><img src={galleryImg4} width="325" alt="Mars 4" /></ImgHolder>
                    </Col2>
                </Row2>
            </Section>
        )
    }
}

export default Gallery