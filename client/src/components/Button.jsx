import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../const'

const Item = styled.span.attrs({
  className: 'button d-block text-center',
})`
  font-size: 20px;
  font-weight: medium;
  width:100%;
  min-width:270px;
  max-width:270px;
  padding:0.90rem 15px;
  overflow:hidden;
  color:${COLORS.whiteColor};
  

  &:after {
    content:' ';
    position:absolute;
    width: 80px;
    height: 80px;
    right: -15px;
    background: black;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100vh;
    z-index:0;
    background-color:${COLORS.overlayButtonColor};
    transition: width 1s;
  }

  &:hover {
    &:after {
      width:125%;
    }  
  }

  span {
    z-index:1;
  }

  &.main-color {
    background-color:${COLORS.mainColor};
  }
  
  &.top-left-rounded {
    border-top-left-radius: 35px;
  }
}`

const Button = ({className, link, title}) => {
  return (
    <Link className={'button-holder ' + className} to={{pathname: link}}>
      <Item className={'position-relative ' + className}><span className='position-relative'>{title}</span></Item>
    </Link>
  )
}

export default Button
