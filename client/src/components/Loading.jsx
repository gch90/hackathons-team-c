import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../const';
import imgMars from '../mars.png';

const Loader = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:100vw;
    z-index:999;
    transition: transform 1.5s cubic-bezier(.89,0,.09,.99);

    &:before{
        content:'';
        position:absolute;
        left:0;
        top:0;
        background: ${COLORS.backgroundColor}
        width:100vw;
        height:100vw;
        transition: transform 1.5s cubic-bezier(.89,0,.09,.99);
        transition-delay:0.25s;
    }

    &:after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        background: #222;
        width:100vw;
        height:100vw;
        z-index:-1;
        transition: transform 1.5s cubic-bezier(.89,0,.09,.99);
        transition-delay:0.5s;
    }

    &.loaded{
        user-select:none;
        pointer-events:none;
        &:after, &:before{
            transform:translateY(-100%);
        }
    }
`;

const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ImageAnimation = styled.div`
    transform-origin:50% 50%;
    animation: ${spinAnimation} 10s linear infinite;
`;

const ImageLoader = styled.div`
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    width:150px;
    height:150px;
    z-index:2;
    transition:opacity 0.3s ease-in-out, transform 1s ease-in-out;

    @media only screen and (max-width: 768px) {
        width:100px;
        height:100px;
    }

    &.loaded{
        transform:translate(-50%, -150%);
        opacity:0;
    }
`;

const Label = styled.div`
    text-align:center;
    padding-top:10px;
    font-weight:500;
`;

const Loading = () => {

  const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      // Disable scroll on page load...
      const defaultOverflow = document.querySelector('html').style.overflow;
      document.querySelector('html').style.overflow = "hidden";

      // When page loaded, enable scroll and hide loading...
      window.addEventListener('load', function(){
        this.setTimeout(() => {
          document.querySelector('html').style.overflow = defaultOverflow;
          window.scrollTo(0, document.body.scrollHeight);
          setLoaded(true);
        }, 1000);
      });
    }, []);

  return (
    <Loader className={loaded ? "loaded" : null}>
      <ImageLoader className={loaded ? "loaded" : null}>
        <ImageAnimation>
          <img src={imgMars} width="150" height="150" alt="mars" />
        </ImageAnimation>
        <Label>Chargement...</Label>
      </ImageLoader>
    </Loader>
  )
}

export default Loading;
