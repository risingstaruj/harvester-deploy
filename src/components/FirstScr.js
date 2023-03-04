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
    font-size: 5vw;
    line-height: 125px;


    letter-spacing: 0.03em;

`
const YouTubeLogo = styled.div`
    position: absolute;
    left: 35vw;
    top: 15vh;
    

  
`

const ChannelInput = styled.input`
    position: absolute;
    left: 35vw;
    top: 26vh;
    height: 48px;
    width: 30vw;
    
`

function FirstScr()
{
    return(
        <BackDiv>
            <HarvestText>Harvest Demo</HarvestText>
            <YouTubeLogo>
            <img src={require("../static/image/Youtube-Logo.png")} width="480px"></img>
            </YouTubeLogo>
            <ChannelInput></ChannelInput>
            <FirstContent>
                
            </FirstContent>
        </BackDiv>
    );
}

export default FirstScr;