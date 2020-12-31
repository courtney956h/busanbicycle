import React from 'react';
import styled, { css } from 'styled-components';
import Purchase1 from './Purchase1';
import Purchase2 from './Purchase2';
import Purchase3 from './Purchase3';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';


const PurchaseBlock = styled.div`
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
    { id:0, title: '일일권 구매', tabCont: <Purchase1 /> },
    { id:1, title: '일일권 재대여', tabCont: <Purchase2 /> },
    { id:2, title: '정회원 대여', tabCont: <Purchase3 /> }
]

const PurchaseList = ({acitveTab, onSelect}) => {
    return (
        <PurchaseBlock>
            <div className="pur_bg">
                <img src="images/bg4.jpg" alt=""/>
            </div>
            <div className="location">
                <div className="row">
                    <Link to="/"><AiFillHome /></Link><p><AiOutlineRight /></p><span>이용권 구매</span>
                </div>
            </div>
            <div className="row">
                <div className="tabs">
                    {
                        obj.map( (data) => (
                            <List key={data.id} active={ acitveTab === data.id } onClick={ ()=>onSelect(data.id) }>{data.title}</List>
                        ) )
                    }
                </div>
                <div className="contents">
                    {
                        obj[acitveTab].tabCont
                    }
                </div>
            </div>
        </PurchaseBlock>
    );
};

export default PurchaseList;