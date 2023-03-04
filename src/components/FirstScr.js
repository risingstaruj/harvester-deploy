import React from 'react';
import styled from 'styled-components';

const BackDiv = styled.div`
    background-color: #1E1E1E;
    height: 100vh;
    
    
`

const FirstContent = styled.div`
    position: absolute;
    background-color: #E3E3E3;
    left: 25vw;
    top: 276px;
    width: 60vw;
    height: 56vh;

    border-radius: 17px;
`
const HarvestText = styled.div`
    position: absolute;
    left: 137px;
    color: #ffffff;
    font-family: 'Qwigley';
    font-style: normal;
    font-weight: 400;
    font-size: 10vw;
    line-height: 125px;


    letter-spacing: 0.03em;

`


function FirstScr()
{
    return(
        <BackDiv>
            <HarvestText>Harvest Demo</HarvestText>
            <FirstContent></FirstContent>
        </BackDiv>
    );
}

export default FirstScr;