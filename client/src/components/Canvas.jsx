import React, { Component, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../const';

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
const Renderer = styled.canvas.attrs({
})`
    background:#000;
    border:2px solid rgba(255, 255, 255, 0.2);
    max-width:100%;
`;


const Canvas = (props) => {

    const canvasRef = useRef(null);

    const update = (ctx, frameCount, player) => {
        player.posX += player.deltaX;
    }

    const draw = (ctx, canvas, frameCount, player) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(player.posX, player.posY, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
    }

    useEffect(() => {

        // Get canvas context with useRef
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.height = window.innerHeight;
        canvas.width = canvas.height * (16/9);

        // Count last frame to stabilize gamespeed and performances
        let frameCount = 0;
        let animationFrameId;

        let player = {
            posX: 20,
            posY: canvas.height - 100,
            deltaX: 0
        }

        window.addEventListener( "keydown", (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    player.deltaX = -20;
                    break;
                case "ArrowRight":
                    player.deltaX = 20;
                    break;
                default:
                    player.deltaX = 0;
                    break;
            }
        });
        window.addEventListener( "keyup", (e) => {
            player.deltaX = 0;
        });

        //Our draw came here
        const render = () => {
            frameCount++;
            update(context, frameCount, player);
            draw(context, canvas, frameCount, player);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render()
      
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw, update])

    return (
        <Section>
            <Container>
                <Renderer ref={canvasRef} {...props}></Renderer>
                <Header>
                    <Subtitle>{props.suptitle}</Subtitle>
                    <h2>{props.title}</h2>
                </Header>
            </Container>
        </Section>
    )
}

export default Canvas;
