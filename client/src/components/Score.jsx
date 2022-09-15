import React, { Component, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../const';

const Label = styled.div.attrs({
})`
    text-align:right;
    font-size:18px;
    font-weight:500;
    margin-bottom:15px;
    text-transform:uppercase;
`;

const Score = (props) => {

    const [score, setScore] = useState(0);

    const handleScore = (score) => {

    }

    return (
        <Label>{score}</Label>
    )
}

export default Score;
