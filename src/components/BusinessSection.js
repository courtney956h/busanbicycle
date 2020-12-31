import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';

const BusinessBlock = styled.div`
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
    .row { 
        .contents { text-align: center; 
            padding: 30px 0;
            .content_top { padding-bottom: 70px; 
                h3 { font-size: 25px;
                    font-weight: normal; 
                    padding: 30px 0;
                    strong { font-size: 30px;
                        font-weight: bold; 
                        color: #0b70b9; 
                    }
                }
                p { font-size: 15px;
                    color: #666; 
                }
            }
            .content_mid { display: flex;
                justify-content: center;
                h2 { font-size: 50px; 
                    color: #0b70b9; 
                    border: 2px solid #0b70b9;
                    border-radius: 50%;
                    height: 250px; width: 250px;
                    padding: 80px 0;  
                }
                span { font-size: 15px; 
                    display: block;
                    background: #0b70b9;
                    color: #fff;
                    border-radius: 50%;
                    height: 200px; width: 200px;
                    padding: 85px 0;
                    margin: 30px 15px; 
                }
            }
            .content_btm { padding: 70px 0;
                h4 { font-size: 18px; 
                    color: #666; 
                    padding-bottom: 15px; }
                p { font-size: 15px; }
            }
        } 
    }
`;

const BusinessSection = () => {
    return (
        <BusinessBlock>
            <div className="bus_bg">
                <img src="images/bg3.jpg" alt=""/>
            </div>
            <div className="location">
                <div className="row">
                    <Link to="/"><AiFillHome /></Link><p><AiOutlineRight /></p><span>사업소개</span>
                </div>
            </div>
            <div className="row">
                <div className="contents">
                    <div className="content_top">
                        <h3>부산자전거는 <strong>누구나, 언제나, 어디서나</strong> 쉽고 편리하게<br/>
                            이용할 수 있는 무인대여 시스템입니다.</h3>
                        <p>교통체증, 대기오염, 고유가 문제를 해결하고 건강한 사회 및 시민들의 삶의 질을 높이고자 마련되었습니다.</p>
                    </div>
    
                    <div className="content_mid">
                        <span>함께하는 건강한 도시</span>
                        <h2>BUSAN</h2>
                        <span>세계적인 자전거 도시</span>
                    </div>

                    <div className="content_btm">
                        <h4>저탄소 녹색성장자전거이용활성화</h4>
                        <p>부산시는 국가 시책에 따라 시민 여러분들이 자전거를 안전하고 편리하게 이용할 수 있도록<br/>
                            안전시설을 확충 · 정비 하면서 시민공영자전거를 운영하였습니다.<br/>
                            또한, 부산 시민 전체를 대상으로 하는 자전거 보험을 가입하고, <br/>
                            자전거 전용차로 개념을 도입하는 등 자전거 타는 문화를 확산시켜<br/>
                            부산을 자전거 타기 제일 좋은 녹색 환경 교통도시로 조성해 나가고 있습니다.</p>
                    </div>
                </div>
            </div>
        </BusinessBlock>
    );
};

export default BusinessSection;