import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../const';


const Loader = styled.div`
    position:fixed;
    background: ${COLORS.backgroundColor}
`;

const Loading = () => {

    useEffect(() => {
        
    }, []);

    return (
        <Loader>
        </Loader>
    )
}

export default Loading;
