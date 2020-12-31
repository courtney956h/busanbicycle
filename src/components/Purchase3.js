import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import styled from 'styled-components';

const PurchaseThird = styled.div`
    text-align: center;
    padding: 50px 0;
    .step { padding: 40px 0;
        h3 { font-size: 25px; 
            display: inline-block;
            p { font-size: 22px;
                display: inline-block;
                padding: 2px 15px;
                margin: 2px 8px;
                line-height: 30px;
                vertical-align: top;
                background: #0b70b9;
                border-radius: 20px;
                color: #fff; }
        }
        p { padding: 10px 0; 
            color: #666;
            font-size: 15px; 
        }
    }
    span { font-size: 25px; 
        color: #666; }
`;

const Third = () => {
    return (
        <PurchaseThird>
            <div className="step">
                <h3><p>STEP 01</p> 회원정보 입력</h3>
                <p>- 회원가입시 등록한 아이디와 비밀번호를 입력합니다.</p>
            </div>
            <span><AiFillCaretDown /></span>
            <div className="step">
                <h3><p>STEP 02</p> 스테이션 조회</h3>
                <p>- 대여하고자 하는 대여소를 조회하여 선택합니다.</p>
            </div>
            <span><AiFillCaretDown /></span>
            <div className="step">
                <h3><p>STEP 03</p> 자전거 선택</h3>
                <p>- 대여가능한 자전거를 선택하여 일일재대여 절차를 수행합니다.</p>
            </div>
        </PurchaseThird>
    );
};

export default Third;