import React, { Component, useRef, useState, useEffect, createRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../const';
import {updateUserValue} from '../hooks/useUserStorage';

const Section = styled.section.attrs({className: 'my-5'})`
    font-size: 32px;
    color: white;
`;  
const Container = styled.div.attrs({
    className: 'container',
})`
`;
const Header = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:100px;
    margin-top:50px;
`;
const Subtitle = styled.span.attrs({
    className: 'suptitle d-block mainColor',
})``;
const FailPopup = styled.div`
    text-align:center;
`;
const FailButton = styled.span`
    font-size:20px;
    font-weight:500;
    letter-spacing:0;
    color:${COLORS.mainColor};
    position:relative;
    cursor:pointer;

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
const Paragraph = styled.p`
    margin:auto;
`;
const Renderer = styled.canvas.attrs({
})`
    background:#000;
    border:2px solid rgba(255, 255, 255, 0.2);
    max-width:100%;
    cursor:pointer;
    &.hidden{
        display:none;
    }
`;


const Canvas = (props) => {

    const canvasRef = useRef(null);
    const [gameState, setGameState] = useState("Play");
    var interval;
    var circleCount = 1;


    const update = (ctx, frameCount, circles, speed, elapsedSinceLastLoop) => {
        for (let i = 0; i < circles.length; i++) {
            const circle = circles[i];
            circle.size -= elapsedSinceLastLoop * speed;
            if(circle.size <= 0){
                circles.splice(i, 1);
                changeGameState("Failed");
            }
        }
    }

    const draw = (ctx, canvas, frameCount, circles) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < circles.length; i++) {
            const circle = circles[i];
            ctx.beginPath();
            ctx.arc(circle.posX, circle.posY, circle.size, 0, 2 * Math.PI);
            ctx.lineWidth = 2;
            ctx.strokeStyle = COLORS.mainColor;
            ctx.stroke();
            ctx.fillStyles = COLORS.overlayButtonColor;
            ctx.fill();
        }
    }

    function Circle(size, posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.size = size;
    }

    const changeGameState = (state) => {
        setGameState(state);
    }    

    const restartGame = () => {
        circleCount = 30;
        changeGameState("Play");
    }

    const winGame = () => {
        updateUserValue('state', 'payment');
        props.history.push('/payment')
    }

    useEffect(() => {

        // Get canvas context with useRef
        var canvas = canvasRef.current;
        var context = canvas.getContext('2d');

        // Set canvas dimensions
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientWidth * 0.6;

        window.addEventListener("resize", () => {
            canvas = canvasRef.current;
            context = canvas.getContext('2d');
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientWidth * 0.6;
        });

        // Count last frame to stabilize gamespeed and performances
        let frameCount = 0;
        let animationFrameId;
        var startingTime;
        var lastTime;
        var totalElapsedTime;
        var elapsedSinceLastLoop;

        // Circles
        let circles = [];
        const speed = 0.05;


        setTimeout(() => {
            interval = setInterval(() => {
                const randomSize = Math.floor(Math.random() * (150 - 100 + 1) + 100);
                const randomPosX = Math.floor(Math.random() * ((canvas.width - randomSize) - randomSize + 1) + randomSize);
                const randomPosY = Math.floor(Math.random() * ((canvas.height - randomSize) - randomSize + 1) + randomSize);
                const circle = new Circle(randomSize, randomPosX, randomPosY);
                circles.push(circle);
    
                circleCount--;
    
                if(circleCount <= 0){
                    clearInterval(interval);
                }
    
            }, 500);
        }, 3000);


        // Handlers
        canvas.addEventListener("click", (e) => {
            var x = e.pageX - e.currentTarget.offsetLeft; 
            var y = e.pageY - e.currentTarget.offsetTop;
            
            for (let i = 0; i < circles.length; i++) {
                const circle = circles[i];
                if(
                    x > circle.posX - circle.size && x < circle.posX + circle.size &&
                    y > circle.posY - circle.size && y < circle.posY + circle.size
                ){
                    circles.splice(i, 1);
                    break;
                }
            }
        }); 

        //Our draw came here
        const render = (currentTime) => {

            if(circleCount <= 0 && circles.length <= 0){
                winGame();
            }

            if(!startingTime){startingTime=currentTime;}
            if(!lastTime){lastTime=currentTime;}
            totalElapsedTime=(currentTime-startingTime);
            elapsedSinceLastLoop=(currentTime-lastTime);
            lastTime=currentTime;

            frameCount++;
            update(context, frameCount, circles, speed, elapsedSinceLastLoop);
            draw(context, canvas, frameCount, circles, speed);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render()
      
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw, update])


    var game;
    switch (gameState) {
        case "Play":
            game = <Renderer ref={canvasRef} {...props}></Renderer>;
            break;
        case "Failed":
            game = 
                <FailPopup>
                    <Renderer className="hidden" ref={canvasRef} {...props}></Renderer>
                    <Paragraph>{props.titleFailed}</Paragraph>
                    <FailButton onClick={() => restartGame()}>{props.buttonFailed}</FailButton>
                </FailPopup>
            ;
            break;
        default:
            break;
    }

    return (
        <Section>
            <Container>
                <Header>
                    <Subtitle>{props.suptitle}</Subtitle>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Header>
                {game}
            </Container>
        </Section>
    )
}

export default Canvas;
