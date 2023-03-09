import React, {useState, useEffect, useRef, useCallback} from 'react';
import styled from 'styled-components';
import styles from './FirstScr.module.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Analyzecomplete from './Analyze_complete';

const BackDiv = styled.div`
    background-color: #1E1E1E;
    height: 100vh;
    width: 100vw;
    overflow: fixed;
    
    
`

const FirstContent = styled.div`
    position: absolute;
    background-color: #E3E3E3;
    left: 25vw;
    top: 37vh;
    width: 60vw;
    height: 400px;

    border-radius: 17px;
    overflow-y: scroll;
    overflow-x: hide;
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
    left: 40vw;
    top: 15vh;
    

  
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

const ElementDiv = styled.div`
position: absolute;
left: 2%;
top: 2%;
width: 96.5%;
height: 60px;
background-color: #ffffff;
border-radius: 10px;

`

const LoaderWrap = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
`

function FirstScr()
{

    const [Target, setTarget] = useState("");
    const [SeResult, setSeResult] = useState([]);
    const [page, setPage] = useState(1);
    const targetRef = useRef(null);
    const [isLoading, setisLoading] = useState(false);
    const [ChannelId, setChannelId] = useState('UCEEwN8Cv4h9ff45OirIwWHw');
    const [modalOpen, setModalOpen] = useState(false);
    const [Init, setInit] = useState(false);
    const [VerdictTemp, setVerdictTemp] = useState({});

    const [ModalComment, setModalComment] = useState("");

    
    const handleIntersection = useCallback(async(entries)=> {
        const entry = entries[0];
        if(entry.isIntersecting && !isLoading) {
            setisLoading(true);
            try {
                const res = await axios.get("/channel/"+ChannelId+"/"+page+"/50");
                const newData = await res.data;

                setSeResult((prev)=>[...prev, ...newData]);
                console.log(SeResult);
                setPage((prevPage) => prevPage+1);
            } catch(err) {
                console.error(err);
            } finally {
                setisLoading(false);
            }
        }
    }, [page, isLoading]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '-50px',
            threshold: [0, 0.3, 1],
        });
        if(targetRef.current) {
            observer.observe(targetRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [handleIntersection]);
    
    
    const ModalContentsSet = (event) => {
        setVerdictTemp()
        setModalOpen(true);
        
    }
    
    
    const GetContentList = (event) => {





    if(ChannelId==='')
    {
        window.alert("채널 ID를 입력하여 주십시오.");
        
    }
    else
    {
       
        setSeResult([]);
        axios.get("/channel/"+ChannelId+"/1/50")
    .then((res)=>{
        
        setSeResult((prev)=> [...prev, ...res.data]);
        console.log(SeResult);
    })  
      }
    
    }

    const ChannelIdChange = event => {
        setChannelId(event.target.value);
    };




    return(
        <BackDiv>
            <HarvestText>Harvester DashBoard</HarvestText>
            <YouTubeLogo>
            <img src={require("../static/image/Youtube-Logo.png")} width="480px"></img>
            </YouTubeLogo>
            <ChannelInput onChange={ChannelIdChange} placeholder="Please input Channel URL here" value="UCEEwN8Cv4h9ff45OirIwWHw"></ChannelInput>
            <SearchButton onClick={(e)=> {GetContentList(e)}}>검색</SearchButton>
            <div>
                    {modalOpen&&<Analyzecomplete  setModalOpen={setModalOpen} Verdict={VerdictTemp} Comment={ModalComment}/>}
                </div>
            <FirstContent>
          
                
                {


/*
<AvatarDiv>
                {//<img src={require("../static/image/Avatar.png")} width="300px"></img>
                }
                </AvatarDiv>

*/
                }
                
                <div>
                    

                    



                    <div>
                        
                    {SeResult.map((item, index) => (
                        <div key={index} className={`${styles.ElementDiv}`}>
                            <a className={`${styles.ChId}`}>{item.userName}</a>
                            <a className={`${styles.Comment}`}>{item.commentText}</a>
                            <a className={`${styles.ChName}`}>{item.channelId}</a>
                            <a className={`${styles.DT}`}>{item.datePublished}</a>
                            <button onClick={() => {setModalComment(item.commentText); setVerdictTemp(item.verdict); setModalOpen(true);}} className={`${styles.AnButton}`}>분석 결과 보기</button>
                            </div>
                        
                    ))}
                    
                    </div>
                    

<div ref={targetRef}></div>
{

isLoading?(
    <LoaderWrap>
        <ReactLoading type="spin" color="#5C5ADE" />
    </LoaderWrap>
): ("")



                }
                



                </div>
               
                


            </FirstContent>
        </BackDiv>
    );
}




export default FirstScr;