import React from 'react';
import styled, { css } from 'styled-components';
import Safety1 from './Safety1';
import Safety2 from './Safety2';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';

const SafetyBlock = styled.div`
    padding: 120px 0;
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
    .tabs { display: flex; 
        justify-content: center;
    }
`;


const List = styled.div`
    font-size: 20px;
    margin: 35px 25px;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #0b70b9;
    ${
        props => props.active && css`
            background: #0b70b9; 
            color: #fff;
            border: 2px solid #0b70b9;
        `
    }
`;


const obj = [
    { id:0, title: '안전수칙', tabCont: <Safety1 /> },
    { id:1, title: '자주묻는질문', tabCont: <Safety2 /> }
]


const SafetyList = ({activeTab, onSelect}) => {
    return (
        <SafetyBlock>
            <div className="safe_bg">
                <img src="images/bg6.jpg" alt=""/>
            </div>
            <div className="location">
                <div className="row">
                    <Link to="/"><AiFillHome /></Link><p><AiOutlineRight /></p><span>안전수칙</span>
                </div>
            </div>
            <div className="row">
                <div className="tabs">
                    {
                        obj.map( (data)=>(
                            <List key={data.id} active={ activeTab === data.id } onClick={ ()=>onSelect(data.id) }>{data.title}</List>
                        ) )
                    }
                </div>
                <div className="contents">
                    {
                        obj[activeTab].tabCont
                    }
                </div>
            </div>
        </SafetyBlock>
    );
};

export default SafetyList;