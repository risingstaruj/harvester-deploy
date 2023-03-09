import React from 'react';
import styled from 'styled-components';

const BarDiv = styled.div`
    background-color: #161717;
    width: 100px;
    height: 100vh; 
    position: absolute;
    top: 0px;
    
`

const ChartsImg = styled.div`
    position: absolute;
    top: 36px;
    left: 25px;
`

const YoutubeSideImage = styled.div`
    position: absolute;
    top: 120px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 25px;
    padding-right: 27px;
    border-radius: 7px;
    background-color: #000000;
`
const NaverCafeImg = styled.div`
    position: absolute;
    top: 210px;
    left: 21px;
`

const InstagramImg = styled.div`
    position: absolute;
    top: 290px;
    left: 31.2px;
`
const NaverImg = styled.div`
    position: absolute;
    top: 354px;
    left: 30px;
`



function Sidebar()
{  
    return(
        <BarDiv>
            <ChartsImg>
                <img src={require("../static/image/Frame.png")}>
                    </img>
                </ChartsImg>
                <YoutubeSideImage>
                    <img src={require("../static/image/Youtube.png")}></img>
                </YoutubeSideImage>
                <NaverCafeImg>
                    <img src={require("../static/image/naver cafe.png")}></img>
                </NaverCafeImg>
                <InstagramImg>
                    <img src={require("../static/image/instagram.png")}></img>
                </InstagramImg>
                <NaverImg>
                    <img src={require("../static/image/Naver.png")}></img>
                </NaverImg>
        </BarDiv>

    );   


}

export default Sidebar;