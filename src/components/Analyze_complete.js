import React from 'react';
import styled from 'styled-components';
import styles from './Analyze_complete.module.css';
import {PieChart} from 'react-minimal-pie-chart';

const BackDiv = styled.div`
    background-color: #1E1E1E;
    height: 100vh;
    
    
`

const FirstContent = styled.div`
    position: absolute;
    background-color: #4B4959;
    left: 20vw;
    top: 25vh;
    width: 60vw;
    height: 56vh;

    border-radius: 17px;
    z-index: 3000;
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
height: 5vh;
background-color: #363447;
border-radius: 20px;
color: #ffffff;
padding-top: 20px;

`
const DisaCard = styled.div`
position: absolute;
left: 3vw;
top: 13vh;
width: 11vw;
height: 18vh;
background-color: #363447;
border-radius: 20px;
color: white;
font-weight: 600;
padding-top: 10px;
`
const ReliCard = styled.div`
position: absolute;
left: 16vw;
top: 13vh;
width: 11vw;
height: 18vh;
background-color: #363447;
border-radius: 20px;
color: white;
font-weight: 600;
padding-top: 10px;
`
const PoliCard = styled.div`
position: absolute;
left: 29vw;
top: 13vh;
width: 11vw;
height: 18vh;
background-color: #363447;
border-radius: 20px;
color: white;
font-weight: 600;
padding-top: 10px;
`
const ViolCard = styled.div`
position: absolute;
left: 42vw;
top: 13vh;
width: 11vw;
height: 18vh;
background-color: #363447;
border-radius: 20px;
color: white;
font-weight: 600;
padding-top: 10px;
`

function Analyze_complete({setModalOpen, Verdict, Comment})
{

    const closeModal = () => {
        setModalOpen(false);
    }
    console.log(Verdict);
   
    
    return(
        
            <FirstContent>
               <CommentView>{Comment}</CommentView>
               <button className={styles.close} onClick={closeModal}>
                닫기
            </button>
               <DisaCard><a>장애인 혐오</a><br /><a>
                
                
                
                
                {(Verdict.장애*100).toFixed(0)}
                
                
                
                
                </a></DisaCard>
                <ReliCard>

                </ReliCard>
                <PoliCard>

                </PoliCard>
                <ViolCard>

                </ViolCard>
            </FirstContent>
      
    );
}

export default Analyze_complete;