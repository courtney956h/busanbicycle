import React from 'react';
import RoadInfoItem from './RoadInfoItem';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import roadInfo from './roadInfo.json';
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';


const RoadInfoBlock = styled.div`
    padding-top: 120px;
    .location { padding: 20px 0;
        font-size: 18px;
        color: #666;
        border-bottom: 1px solid #ddd;
        .row { display: flex;
                p { padding: 0 10px; }
            span { line-height : 23px; 
                color: #0b70b9; 
            }
        }
    }
    .row { display: flex;
        .tabs { margin: 20px 0 50px; }
        .contents { display : flex; 
            flex-wrap: wrap; 
            justify-content: space-between;
            width: 100%;
        }
    }
`;


const List = styled.div`
    width: 230px;
    height : 50px;
    cursor: pointer;
    padding: 10px 20px; 
    text-align: center;
    background: #0b70b9; 
    color: #fff;
    ${
        props => props.active && css`
            background: #fff; 
            color: #0b70b9;
            border: 2px solid #0b70b9; 
        `
    }
`;

const roadList = roadInfo;

const obj = [
    { id:0, title:'강서구', part:roadList.item1 },
    { id:1, title:'사상구', part:roadList.item2 },
    { id:2, title:'사하구', part:roadList.item3 },
    { id:3, title:'북구', part:roadList.item4 },
    { id:4, title:'금정구', part:roadList.item5 },
    { id:5, title:'동래구', part:roadList.item6 },
    { id:6, title:'연제구', part:roadList.item7 },
    { id:7, title:'서구', part:roadList.item8 },
    { id:8, title:'중구', part:roadList.item9 },
    { id:9, title:'영도구', part:roadList.item10 },
    { id:10, title:'남구', part:roadList.item11 },
    { id:11, title:'수영구', part:roadList.item12 },
    { id:12, title:'해운대구', part:roadList.item13 }
]

const RoadInfoSection = ({activeTab, onSelect}) => {
    return (
       <RoadInfoBlock>
            <div className="road_bg">
                <img src="images/bg2.jpg" alt=""/>
            </div>
            <div className="location">
                <div className="row">
                    <Link to="/"><AiFillHome /></Link><p><AiOutlineRight /></p><span>도로정보</span>
                </div>
            </div>
            <div className="row">
                <div className="tabs"> 
                    {
                        obj.map( (data)=>(
                            <List key={data.id} active={ activeTab === data.id }  onClick={ ()=>onSelect(data.id)}>{data.title}</List>
                        ) )
                    }
                </div>
                <div className="contents">
                    {
                        obj[activeTab].part.map( (data, index)=>(<RoadInfoItem key={index} name={data.gugunNm} start={data.startSpot} end={data.endSpot} total={data.total}></RoadInfoItem>) )
                    }
                </div>
            </div>
       </RoadInfoBlock>
    );
};

export default RoadInfoSection;