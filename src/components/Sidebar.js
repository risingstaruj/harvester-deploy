import React from 'react';
import styled from 'styled-components';

const BarDiv = styled.div`
    background-color: #161717;
    width: 100px;
    height: 100%; 
    position: absolute;
    top: 0px;
    
`

const ChartsImg = styled.div`
    position: absolute;
    top: 36px;
    left: 25px;
`
function Sidebar()
{  
    return(
        <BarDiv>
            <ChartsImg>
                <img src={require("../static/image/Frame.png")}>
                    </img>
                </ChartsImg>
        </BarDiv>
    );   


}

export default Sidebar;