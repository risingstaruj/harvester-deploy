import React from 'react';
import styled from 'styled-components';



const BackDiv = styled.div`
    background-color: #1E1E1E;
    height: 100vh;
    
    
`

const FirstContent = styled.div`
    position: absolute;
    background-color: #4B4959;
    left: 25vw;
    top: 37vh;
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
    left: 50vw;
    top: 13vh;
    

  
`

const ChannelInput = styled.input`
    position: absolute;
    left: 35vw;
    top: 27.5vh;
    height: 48px;
    width: 32.5vw;
    
`

const SearchButton = styled.button`
position: absolute;
left: 69vw;
top: 27.5vh;
height: 53px;
width: 10vw;
background-color: #8D1515;
border: 0px;
border-radius: 8px;
color: #ffffff;
font-size: 18px;
font-family: 'Open Sans';
`

const AvatarDiv = styled.div`
margin-top: 13vh;
margin-bottom: 13vh;

`

const CommentView = styled.div`
position: absolute;
left: 7vw;
right: 7vw;
top: 2vh;
width: 46vw;
height: 7vh;
background-color: #363447;
border-radius: 20px;
color: #ffffff;

`
const Card = styled.div`
position: absolute;
left: 3vw;
top: 13vh;
width: 11vw;
height: 20vh;
background-color: #363447;
border-radius: 20px;

`


function FirstScr()
{
    return(
        <BackDiv>
            <HarvestText>Harvester DashBoard</HarvestText>
            <YouTubeLogo>
            <img src={require("../static/image/분석차트Icon.png")} width="100px"></img>
            </YouTubeLogo>
            <ChannelInput></ChannelInput>
            <SearchButton>입력</SearchButton>
            <FirstContent>
               <CommentView>(테스트 문구)넌 왜 팔을 그렇게 움직여? 장애인이냐?</CommentView>
               <Card></Card>
            </FirstContent>
        </BackDiv>
    );
}

export default FirstScr;