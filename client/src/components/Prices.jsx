import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../const';


const Section = styled.section.attrs({className: 'my-5', id: 'prix'})`
    font-size: 32px;
    color: white;
`;  
const Container = styled.div.attrs({
    className: 'container',
})``;
const Header = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
`;
const Subtitle = styled.span.attrs({
    className: 'suptitle d-block mainColor',
})``;
const Paragraph = styled.p`
    opacity:0.75;
    font-size:18px;
    margin-left:auto;
    margin-right:auto;
    max-width:250px;
`;
const Ticket = styled.div`
    position:relative;
    background:rgba(255,255,255, 0.05);
    padding:80px 100px;
    width:750px;
    max-width:100%;
    margin:auto;
    text-align:center;
    @media only screen and (max-width: 768px) {
        padding:50px; 
    }
    &:after{
        content:'';
        display:block;
        position:absolute;
        background:${COLORS.backgroundColor};
        width:110px;
        height:110px;
        border-radius:50%;
        left:0;
        top:50%;
        transform:translate(-50%, -50%);
    }
    &:before{
        content:'';
        display:block;
        position:absolute;
        background:${COLORS.backgroundColor};
        width:110px;
        height:110px;
        border-radius:50%;
        right:0;
        top:50%;
        transform:translate(50%, -50%);
    }
    &:before, &:after{
        @media only screen and (max-width: 768px) {
            width:60px;
            height:60px;
        }
    }
`;
const Counter = styled.div`
    position:absolute;
    left:20px;
    top:20px;
    font-size:12px;
    opacity:20%;
    letter-spacing:1.2px;
`;
const Price = styled.div.attrs({className: 'style-h2'})``;
const SectionLink = styled(Link)`
    font-size:20px;
    font-weight:500;
    letter-spacing:0;
    color:${COLORS.mainColor};
    position:relative;

    &:hover {
        color: ${COLORS.mainColor};
        text-decoration:none;
    }

    &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: -2px;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: ${COLORS.mainColor};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    &:hover:after {
        width: 100%;
        left: 0;
    }
`;

const Prices = (props) => {

    const increment = 10000;
    const [price, setPrice] = useState({current: props.min, max:props.max});
    const [timer, setTimer] = useState(5);
    const [timerState, setTimeState] = useState(true);
    

    useEffect(() => {
        // Increment timer...
        const interval = setInterval(function(){
            setTimer(prevCount => {
                if(prevCount <= 0){
                    changePrice();
                    return 5;
                }
                else{
                    return prevCount - 1;
                }
            });
            if(price.current >= price.max){
                clearInterval(interval);
                setTimeState(false);
            }
        }, 1000); 
        return () => clearInterval(interval);
    }, []);

    // Bamboozle the user?
    const [linkText, setlinkText] = useState(props.link);
    const handleClick = (e) => {
        e.preventDefault();
        setlinkText(props.linkFailed);
    }

    // Increment ticket price...
    const changePrice = () =>{
        const newArr = price;
        newArr.current = newArr.current + increment;

        if(newArr.current > newArr.max){
            newArr.current = newArr.max;
        }

        setPrice(newArr);
    }
    
    // Changes content display if max price has reached...
    let counter;
    let notice;
    if(timerState){
        counter = <Counter>00:0{timer}</Counter>;
        notice = props.text;
    }
    else{
        notice = props.textFailed;
    }

    return (
        <Section>
            <Container>
                <Header>
                    <Subtitle>{props.suptitle}</Subtitle>
                    <h2>{props.title}</h2>
                </Header>
                <Ticket>
                    {counter}
                    <Paragraph>{notice}</Paragraph>
                    <Price>{price.current}{props.currency}</Price>
                    <SectionLink to={{pathname: props.url}} onClick={(e) => handleClick(e)}>{linkText}</SectionLink>
                </Ticket>
            </Container>
        </Section>
    )
}

export default Prices;
