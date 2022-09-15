import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../const';


const Section = styled.section`
    background-color: black;
    font-size: 32px;
    color: white;
`;  
const Container = styled.div({className: 'container'});
const Header = styled.div`
    max-width:500px;
    margin:auto;
`;
const Ticket = styled.div`
    background:rgba(255,255,255, 0.05);
    &:after{
        content:'';
        display:block;
    }
`;
const Counter = styled.div({className: 'container'});
const Notice = styled.div({className: 'container'});
const Price = styled.div({className: 'style-h2'});

const Prices = (props) => {

    const increment = 1000000;
    const [price, setPrice] = useState({current: props.min, max:props.max});
    const [timer, setTimer] = useState(5);
    const [timerState, setTimeState] = useState(true);

    useEffect(() => {
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

    const changePrice = () =>{
        const newArr = price;
        newArr.current = newArr.current + increment;

        if(newArr.current > newArr.max){
            newArr.current = newArr.max;
        }

        setPrice(newArr);
    }
    
    let counter;
    if(timerState){
        counter = <Counter>00:0{timer}</Counter>;
    }
    

    return (


        <Section>
            <Container>
                <Header>
                    <span className="suptitle">{props.suptitle}</span>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Header>
                <Ticket>
                    {counter}
                    <Notice>{props.notice}</Notice>
                    <Price>{price.current}</Price>
                    <Link to={{pathname: props.url}}>{props.link}</Link>
                </Ticket>
            </Container>
        </Section>
    )
}

export default Prices;
